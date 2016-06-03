// loads svg exported by sketch and writes json app initial state
// usage node compile-design in.svg out.json

/*
	Assumptions for svg exported from sketch
	
	- Circuit nodes are nested two groups deep in root svg. 
	- Each circuit node is a single svg primitive (circle, path, polyline). 
	- Each circuit node is labeled with svg id property as switch, led, wire, and, or, xor
	- connectvitity between switchs, gates, wires is inferred based on svg geometry
	- signal flows along wire in direction wire is drawn. I.e. first point in the line is assumed to be input, last assumed to be output
	- gates and switches always connect by wires (no gate to gate direct connection)
	- wires are always lines, there's no branching of wires to more than one output
	- a gate that has more than one output is implemented as more than one wire originating from gate
	- junctions (little circles) show connected wires, implemented as another sibling output to wire
*/

import xml2js from 'xml2js'
import fs from 'fs'
import util from 'util'
import Q from 'q'
import _ from 'underscore'

import { SWITCH, LED, WIRE, JUNCTION, NOT_GATE, AND_GATE, OR_GATE, XOR_GATE } from '../client/constants/nodeTypes'
import { BOOL_OFF } from '../client/constants/boolStates'

let parseString = xml2js.parseString

// returns a promise
let parseFile = function(path) {
	let svg = fs.readFileSync(path).toString();

	let deferred = Q.defer()
	parseString(svg, function (err, result) {
		if (err) deferred.reject(err)
		deferred.resolve(buildAppState(result))
	})
	return deferred.promise
}

// returns new appstate object
let buildAppState = function(svg) {
	let nodesObj = svg.svg.g[0].g[0]

	// within group, xml2js creates array of like-typed object
	// e.g. all circles in an array under prop circle.

	let nodes = []
	let id = 0

	_.each(nodesObj.circle, function(c) {
		nodes.push(createNode(c, id++, 'circle'))
	})
	_.each(nodesObj.path, function(p) {
		nodes.push(createNode(p, id++, 'path'))
	})
	_.each(nodesObj.polyline, function(p) {
		nodes.push(createNode(p, id++, 'polyline'))
	})

	let wires = _.filter(nodes, function(n) {
		return n.type === WIRE
	})

	// gates includes AND, OR, XOR, etc, and switches
	let gates = _.filter(nodes, function(n) {
		return (n.type !== WIRE && n.type !== JUNCTION)
	})

	_.each(wires, function(wire) {
		// mutates wire and gate objects in place
		// which is reflected in nodes
		createConnections(wire, gates)
	})

	// deal with junctions

	return {
		allNodes: nodes,
		changedNodes: nodes 
		// initially flag all nodes as having changed so propogation gets circuit into consistent state
	}
}

// figures out node type and creates node object
let createNode = function(n, id, element) {
	let node = {
		nodeId: id,
		type: mapType(n.$.id),
		state: BOOL_OFF,
		inputs: [],
		outputs: [],
		svg: {}
	}

	// set svg property to object keyed to element type (circle, path, polyline)
	// with value being parsed properties
	node.svg[element] = n.$
	return node
}

// maps sketch node names (wire, and, or, switch, junction)
// to nodeTypes
let mapType = function(label) {
	label = label.toLowerCase()
	switch (label) {
		case "switch":
			return SWITCH
		case "led":
			return LED
		case "wire":
			return WIRE
		case "junction":
			return JUNCTION
		case "not":
			return NOT_GATE
		case "and":
			return AND_GATE
		case "or":
			return OR_GATE
		case "xor":
			return XOR_GATE
		default:
			throw ("unknown type " + label)
	}
}

// assumes that first point is (leftmost) start and 
// last point is (rightmost) end
// throws exception if first point has x coord greater or equal to last
let getEndpoints = function(wire) {
	let points = []

	// wire's svg is a <path/>
	if (wire.svg.path) {
		points = getPathPoints(wire.svg.path.d)
		// wire's svg is a <polyline/>
	} else if (wire.svg.polyline) {
		points = getPolylinePoints(wire.svg.polyline.points)
	} else {
		throw ("unrecognized svg for wire: " + String(wire))
	}

	return {
		start: _.first(points),
		end: _.last(points)
	}
}

// mutates wire and gate objects
let createConnections = function(wire, gates) {
	let endpoints = getEndpoints(wire)

	let upstreamOfWire = getNearestGate(endpoints.start, gates)
	let downstreamOfWire = getNearestGate(endpoints.end, gates)

	// which of the downstream gates inputs is this wire
	// connected to
	let downstreamOfWireInputIndex = downstreamOfWire.inputs.length 

	// push boolean off state, we'll update states later
	downstreamOfWire.inputs.push(BOOL_OFF)

	// set output of wire to be downstream gate
	wire.outputs.push({
		nodeId: downstreamOfWire.nodeId,
		nodeInput: downstreamOfWireInputIndex
	})

	// set wire input as off
	wire.inputs.push(BOOL_OFF)

	// set upstream gate's output as the wire
	// wires only have 1 input so don't need to figure out
	// which wire input upstream is connected to
	upstreamOfWire.outputs.push({
		nodeId: wire.nodeId,
		nodeInput: 0
	})
}

// returns nearest gate to the point
let getNearestGate = function(point, gates) {
	// sorted by distance to point
	let sortedGates = _.sortBy(gates, function(gate) {
		let distance = getDistance(point, gate)
		return distance
	})
	return sortedGates[0]
}

// distance between point and gate. uses a simple heuristic to 
// determine a point for the gate (which is really a filled shape)
let getDistance = function(point, gate) {
	let gatePoint = getGatePoint(gate)
	// euclidian distance
	let distance = Math.pow((point.x - gatePoint.x), 2) + Math.pow((point.y - gatePoint.y), 2)
	distance = Math.sqrt(distance)

	// gate point doesn't work for or gate id 5

	return distance
}

// heuristic that computes average point or center point of the gate svg 
let getGatePoint = function(gate) {
	let point

	// path or polyline
	if (gate.svg.path || gate.svg.polyline) {
		let points = []
		if (gate.svg.path.d) {
			points = getPathPoints(gate.svg.path.d) 
		} else {
			points = getPolylinePoints(gate.svg.polyline.points)
		}

		let sum = _.reduce(points, function(sum, point) {
			return {
				x: sum.x + point.x,
				y: sum.y + point.y,
				number: sum.number + 1
			}
		}, {x: 0, y:0, number: 0})

		point = {
			x: sum.x / sum.number,
			y: sum.y / sum.number
		}
	// circle	
	} else if (gate.svg.circle)	{
		point = {
			x: parseFloat(gate.svg.circle.cx),
			y: parseFloat(gate.svg.circle.cy)
		}
	} else {
		throw ("unrecognized svg share for gate: " + String(gate))
	}

	return point
}

// returns list of points from svgpath d= string
// points separated by spaces with letter prefix
// coords in a point separated by comma
let getPathPoints = function(pathString) {
	let points = pathString.split(' ')

	// remove letter prefixes
	let lettersRemoved = _.map(points, function(p) {
		// remove beggining letter codes from svg path points
		p = p.replace(/([a-z]|[A-Z])/g, '')

		// split into x and y coords
		let coords = p.split(',')
		return {
			x: parseFloat(coords[0]),
			y: parseFloat(coords[1])
		}
	})

	// sometimes there are letters without coordinates which become
	// NaN, filter them
	return _.filter(lettersRemoved, function(p) {
		if (Number.isNaN(p.x) || Number.isNaN(p.y)) {
			return false
		}
		return true
	})
}

// returns list of points from svg polyline points string
// coords separated by spaces like x0 y0 x1 y1...
let getPolylinePoints = function(polylineString) {
	let points = []
	let coords = polylineString.split(' ')
	let pointIdx = 0
	for (let i = 0; i < coords.length; i += 2) {
		points[pointIdx] = {
			x: parseFloat(coords[i]),
			y: parseFloat(coords[i+1])
		}
		pointIdx++
	}
	return points
}

let main = function() {
	if (process.argv.length < 4) {
		console.log("usage: babel-node compile-design infile.svg outfile.json")
		process.exit(1)
	}

	let infile = process.argv[2]
	let outfile = process.argv[3]

	parseFile(infile).then(function(obj) {
		fs.writeFile(outfile, JSON.stringify(obj, null, 2), function(err) {
	    if (err) {
	      console.log(err);
	      process.exit(1)
	    }
		})
		// process.exit(0)
	})
}

main()



