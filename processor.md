## Programmable machine design

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
- force ALU A to 0
- gate output register from self/ALU
- gate PCREG from PCREG+1 or ALU


#### Instruction set
Instructions are 3 bits which selects one of 8 op-codes.

Instructions:

| Binary | Instruction | ALU B  | DIS -> ALU A | 0 -> ALU A | ALU -> DIS |
| ------ | ----------- | ------ | ------------ | ---------- | ---------- |
| 000    | BRA         | 1 or 2 | 0            | 0          | 0          |
| 001    | JMP4        | 000100 | 0            | 0          | 0          |
| 010    | RSTP        | 000000 | 0            | 0          | 0          |
| 011    | RSTO        | 010010 | 1            | 1          | 1          |
| 100    | ADD1        | 000001 | 1            | 0          | 1          |
| 101    | ADD8        | 001000 | 1            | 0          | 1          |
| 110    | SUB1        | 111111 | 1            | 0          | 1          |
| 111    | SUB8        | 111000 | 1            | 0          | 1          |

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

