## Programmable machine design

#### Instruction memory
4 bit program counter, 16 instruction programs

#### Output + Display
6 bit output register drives 8x8 grid. One square in the grid is lit up and can move up, down, left, right through addition and subtraction.

#### Registers
Single 6 bit register. Push and Pop move value of output register to this register.

#### Instruction set
Instructions are 3 bits which selects one of 8 op-codes. No arguments or literals in instruction set because there is no memory or register file.

Instructions:
1. ADD1
1. ADD7
1. ADD8
1. ADD9
1. SUB1
1. SUB7
1. SUB8
1. SUB9
1. CLR
1. BRAA
1. BRAB
1. JMP4
1. JMP8
1. RST
1. PUSH
1. POP

#### Pac Man
> Program that uses inputs A and B to move a cursor around the grid

BRNA
JMP8
BRNB
JMP4
SUB8
RST
RST
ADD1
RST
BRNB
JMP4
ADD8
RST
RST
SUB1
RST


