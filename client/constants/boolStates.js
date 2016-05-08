// states that a gate, switch, wire, etc can be in

export let BOOL_OFF = "BOOL_OFF"
export let BOOL_ON = "BOOL_ON"

// have an explicit state for transitions so gate component can animate
// appearance from off to on or on to off
export let BOOL_TRANSITION_OFF = "BOOL_TRANSITION_OFF"
export let BOOL_TRANSITION_ON = "BOOL_TRANSITION_ON"