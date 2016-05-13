// propogates circuit state through network of logic gates and wires.



// toggle switch: changes switch state and adds switch to changed node list

// propogate state change list: looks at nodes in changed node list and propogates changes. 
// takes in list of changed nodes and calls propogate one node on each.

// propogate one node propogates changes 1 layer downstream then adds those nodes to change list




// every function conforms to reducer contract, taking action and state, returning new state

// need to write in a way so that one "layer" at a time is propogated, sort of a synchronous breadth first
// propogation. This will look better if / when we animate propogation.
