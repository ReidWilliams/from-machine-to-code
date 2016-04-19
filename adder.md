### Gates can make a circuit that adds numbers

#### This is a 3 bit adder created with logic.ly. 
![3 + 3](https://raw.githubusercontent.com/ReidWilliams/from-machine-to-code/master/assets/adder/3%20%2B%203.png)

#### Adding up the numbers in a table.
![3 + 3](https://raw.githubusercontent.com/ReidWilliams/from-machine-to-code/master/assets/adder/adding.jpg)

#### This is how gates might look...more friendly than logic.ly
![AND gates](https://raw.githubusercontent.com/ReidWilliams/from-machine-to-code/master/assets/gates.jpg)

Interaction would be clicking circles to turn on / off inputs to gates. Each of the two 3 bit inputs would also show the decimel value. The table would update too. 

- Is a 3 bit adder too many gates to easily understand, should it be 2 bits instead?
- Will we be able to lay out this many gates in a neat way?
- Doesn't seem like it'll be very easy to automate laying out the gates and wires, more likely we'll lay them out by hand so they look neat and easy to understand.

### Next
- draw adder in sketch to see how neatly we can lay it out
- create React components for AND, OR, XOR gates

### How this might work in React + Redux
- Redux state keeping track of which gates are in a circuit, and how they're connected
- Logic (is it a reducer...kind of want something that's pure javascript and abstracted from redux) that updates a network of gates
- React components for gates, wires that are bound to redux store that draws gates, wires colored appropriately
- Layout (x, y locations or gates and wires) is written by hand



