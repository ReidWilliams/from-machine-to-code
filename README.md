# from-machine-to-code
Explore and program a tiny microprocessor starting from a single gate. An explorable explanation that shows how a CPU is built from AND, OR, NOT, and XOR gates. In the style of http://explorableexplanations.com.

# Outline

## Meet the gates
- Gates are electrical
- Gates have inputs and outputs
- Inputs and outputs can be on or off, like a switch
- AND, OR, NOT

## Gates can be combined 
- If it's hot outside and it's not windy and it's not raining and we've got sunscreen, then let's go to the beach. We can use a few gates to build a circuit that'll help us decide whether to go to the beach.

## Gates can remember things 
- 1 bit register
- Feeding an output back to the input of a gate lets us build a circuit that remembers it's input.

## ON / OFF switches can count
- relationship between ON / OFF and a bit
- With many bits we can count 
- Visualize as abstract circle / bulbs that are on or off. 
- Below is binary representation of 0 and 1s
- Below is decimal representation

## Meet a new gate, the XOR gate

## Gates can make a circuit that adds numbers
- 4 bit adder

## Two's complement lets us keep track of positive and negative numbers
- Our 4 bit adder still works for two's complements numbers

## Gates can make a circuit that remembers many things
- concept of a register file
- one 2 bit input selects which cubby hole to use
- another 1 bit input is the number to remember
- another bit that controls reading / writing
- we can visualize this as individual gates
- we can also visualize this as a box "register file"

## Register files can have many cubbies and remember numbers
- 4 bit address, 4 bit data register file
- don't show as gates (probably too complicated)
- show as box with address and data and out

## With an adder and a register file we can make a calculatr
- adder has register file at output which feeds back to one of the adders inputs
- start seeding intuition data paths and control paths
- start seeding intuition about need for a clock

## ... more lessons ...

## Eventual tiny cpu built
- 16 bit data path?
- no distinction between register file, cache, memory (large memory addressable in 1 cycle)
- registers that feed two ALU inputs and register that captures output
- Load / store instructions that load from memory into one of two registers
- what should a fun out put be? Tiny display mapped into memory
- no interrupts, but registers that capture some simple inputs like mouse and keyboard





