import { SWITCH, WIRE, AND_GATE } from '../constants/nodeTypes'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

let initialState = {
	allNodes: [
	  {
	    nodeId: 0,
	    type: SWITCH,
	    state: BOOL_OFF,
	    inputStates: [],
	    outputs: [
	    	{
	    		// output connects to node with id 1
	    		nodeId: 1,
	    		// output connects to node's input 0
	    		nodeInput: 0
	    	}
	    ]
	  },
	  {
	    nodeId: 1,
	    type: WIRE,
	    state: BOOL_OFF,
	    inputStates: [ BOOL_OFF ],
	    output: [
	    	{
	    		nodeId: 4,
	    		nodeInput: 0
	    	}
	    ]
	  },
	  {
	    nodeId: 2,
	    type: SWITCH,
	    state: BOOL_OFF,
	    inputStates: [],
	    output: [
	    	{
	    		nodeId: 3,
	    		nodeInput: 0
	    	}
	    ]
	  },
	  {
	    nodeId: 3,
	    type: WIRE,
	    state: BOOL_OFF,
	    inputStates: [ BOOL_OFF ],
	    output: [
	    	{
	    		nodeId: 4,
	    		nodeInput: 1
	    	}
	    ]
	  },
	  {
	    nodeId: 4,
	    type: AND_GATE,
	    state: BOOL_OFF,
	    inputStates: [ BOOL_OFF, BOOL_OFF],
	    output: []
	  }
	],

	// these are nodes that have changed state but have not had
	// their new state propogated to next nodes in the circuit
	changedNodes: []
}

export default initialState