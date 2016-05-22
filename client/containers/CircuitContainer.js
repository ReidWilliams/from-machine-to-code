import React, { Component } from 'react'
import { connect } from 'react-redux'

import SvgComponent from '../components/SvgComponent'
import CircuitNodeComponent from '../components/CircuitNodeComponent'
import { switchToggled } from '../reducers/circuitReducer'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { SWITCH, WIRE, AND_GATE, OR_GATE, NOT_GATE, JUNCTION } from '../constants/nodeTypes'


function mapStateToProps(state) {
  return {
    allNodes: state.circuitNodes.allNodes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchToggled: function(nodeId) {
      let circuit = 0
      dispatch(switchToggled(circuit, nodeId))
    }
  }
}

class CircuitContainer extends Component {
  render() {
    return (
      <div className="test-svg-container centered">
        <SvgComponent>
          { this.props.allNodes.map(function(node) {
            switch (node.type) {
              case SWITCH:
                return (<CircuitNodeComponent node={node} clickHandler={() => this.props.switchToggled(node.nodeId)} svg={node.svg} />)
              default:
                return (<CircuitNodeComponent node={node} clickHandler={() => {}} svg={node.svg} />)
            }
          })}
        </SvgComponent>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)