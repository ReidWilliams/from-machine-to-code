## Programmable machine design

#### Instruction memory
3 bit program counter, 8 instruction programs

#### Output + Display
6 bit output register drives 8x8 grid. One square in the grid is lit up and can move up, down, left, right through addition and subtraction.

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

