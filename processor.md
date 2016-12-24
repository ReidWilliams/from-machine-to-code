## Programmable machine design

#### Open question
Best way to force PC to 0 on reset, and output reg to 18 (nice place to start). May want to have gating or mode for ALU that forces input A to be 0. 

#### Instruction memory
3 bit program counter, 8 instruction programs

#### Output + Display
6 bit output register drives 8x8 grid. One square in the grid is lit up and can move up, down, left, right through addition and subtraction. Register named OUTREG.

Input to register has mux that switches between output of ALU and output of register

#### ALU
ALU adds two 6 bit numbers.

#### Control logic
Controls second ALU input to do constant additions of 1, 4, 8, and subtractions of 1, 8. 

Inputs:

- 3 instruction bits
- 1 User input bit

Outputs: 
- 6 ALU B input bits.
- gate ALU A input from OUTREG or PCREG 
- gate output register from self/ALU
- gate PCREG from PCREG+1 or ALU


#### Instruction set
Instructions are 3 bits which selects one of 8 op-codes.

Instructions:

1. ADD1
1. ADD8
1. SUB1
1. SUB8
1. BRA
1. JMP4
1. RSTP
1. RSTO

#### Controlled fall
> Program that uses input move a cursor left and right as it falls

```
ADD8
BRNA
JMP4
ADD1
RST
RST
SUB1
RST
```

