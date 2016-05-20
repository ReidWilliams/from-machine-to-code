// loads svg exported by sketch and builds initial app state

/*
	Assumptions for svg exported from sketch
	
	- Circuit nodes are nested two groups deep in root svg. 
	- Each circuit node is a single svg primitive (circle, path, polyline). 
	- connectvitity between switchs, gates, wires is inferred based on svg geometry
	- signals flow left to right, so leftmost point of a wire is it's input, rightmost is output
	- gates and switches always connect by wires (no gate to gate direct connection)
	- wires are always lines, there's no branching of wires to more than one output
	- a gate that has more than one output is implemented as more than one wire
	- junctions (little circles) show connected wires, implemented as another sibling output to wire
*/

import xml2js from 'xml2js'
import fs from 'fs'
import util from 'util'
import Q from 'q'
import _ from 'underscore'

import { SWITCH, WIRE, JUNCTION, NOT_GATE, AND_GATE, OR_GATE } from '../constants/nodeTypes'
import { BOOL_OFF } from '../constants/boolStates'

let parseString = xml2js.parseString

// returns a promise
let parseFile = function(path) {
	let svg = fs.readFileSync(path).toString();

	let deferred = Q.defer()
	parseString(svg, function (err, result) {
		if (err) deferred.reject(err)
		deferred.resolve(buildAppState(result))
	})
}

let buildAppState = function(svg) {
	let nodesObj = svg.svg.g[0].g[0]

	// within group, xml2js creates array of like-typed object
	// e.g. all circles in an array under prop circle.

	let nodes = []
	let id = 0

	_.each(nodesObj.circle, function(c) {
		nodes.push(createNode(c, id++))
	})
	_.each(nodesObj.path, function(p) {
		nodes.push(createNode(p, id++))
	})
	_.each(nodesObj.polyline, function(p) {
		nodes.push(createNode(p, id++))
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

	// code works up to here
	// debugger

	// filter nodes for list of gates + switchs
	// for each, find wires that terminate inside 
	// determine whether  wire is input or output (point with min x is assumed start of wire)
	// for each junction, determine wire it covers and add to wire's parent output
	// 		(so make sibling of wire)

	// add all switches to node changed list
}

// figures out node type and creates node object
let createNode = function(n, id) {
	return {
		nodeId: id,
		type: mapType(n.$.id),
		state: BOOL_OFF,
		raw: n.$
	}
}

// maps sketch node names (wire, and, or, switch, junction)
// to nodeTypes
let mapType = function(label) {
	label = label.toLowerCase()
	switch (label) {
		case "switch":
			return SWITCH
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
	// points separated by spaces with letter prefix
	// coords in a point separated by comma
	if (wire.raw.d) {
		let path = wire.raw.d
		points = path.split(' ')

		points = _.map(points, function(p) {
			// remove beggin letter codes from svg path points
			p = p.replace(/([a-z]|[A-Z])/g, '')

			// split into x and y coords
			let coords = p.split(',')
			return {
				x: parseFloat(coords[0]),
				y: parseFloat(coords[1])
			}
		})

		// wire's svg is a <polyline/>
		// coords separated by spaces like x0 y0 x1 y1...
	} else {
		let coords = wire.raw.points.split(' ')
		let pointIdx = 0
		for (let i = 0; i < coords.length; i += 2) {
			points[pointIdx] = {
				x: parseFloat(coords[i]),
				y: parseFloat(coords[i+1])
			}
			pointIdx++
		}
	}

	if (_.first(points).x >= _.last(points).x) {
		throw ("start point is to the right of end point for wire " + wire.raw.d)
	}

	return {
		start: _.first(points),
		end: _.last(points)
	}
}

let createConnections = function(wire, gates) {
	let endpoints = getEndpoints(wire)
	here
	// here
}



// export default parseFile

parseFile('./design/test1.svg')

