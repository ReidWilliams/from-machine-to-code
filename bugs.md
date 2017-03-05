- ALU in B0 has bug during ```RSTD``` instruction. B0 should be 1 under a third condition: PHASE AND RSTD.

- Refactor app to use setState instead of redux.

- Refactor app state to have two copies of circuit, one master and another slave.

Master receives inputs (like clock transitions and switch inputs) and updates its internal state, and emits a state changed event, but isn't automatically tied to React components.

Slave copy subscribes to master change notifications and copies master's state, and triggers React component rerenders.

For most circuits, there will only be a master, and changes to master state will trigger react component renders.

For complex circuits, like the full processor, we just can't run the circuit at a high enough clock speed to be updating React components at each state change, so we insert logic where every (e.g.) 200 ms we sample the master circuit, copy state to slave, and update React components.

That way we can run the master at as fast a speed as the pure JS code will allow without getting slowed down by rendering.
