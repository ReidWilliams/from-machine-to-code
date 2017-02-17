## Programmable machine design

#### Instruction memory
3 bit program counter, 8 instruction programs

#### Output + Display
6 bit output register drives 8x8 grid. One square in the grid is lit up and can move up, down, left, right through addition and subtraction. Register named DISPLAY.

Input to register has mux that switches between output of ALU and output of register

#### ALU
ALU adds two 6 bit numbers.

#### Control logic
Two phases: first phase updates display, second phase updates PC. Separated into two phases because there's only one ALU and each phase needs to use it. Each phase is one clock cycle, processor does 1 instruction per two clock cycles.

Controls second ALU input to do constant additions of 1, 4, 8, and subtractions of 1, 8. 

Inputs:

- 3 instruction bits
- 1 User input bit

Outputs: 
- 6 ALU B input bits.
- gate ALU A input from DISPLAY or PCREG
- force ALU A to 0
- gate output register from self/ALU
- gate PCREG from PCREG+1 or ALU


#### Instruction set
Instructions are 3 bits which selects one of 8 op-codes.

Instruction logic for display phase:

| Phase | Binary | Instruction | ALU B        | DIS -> ALU A | 0 -> ALU A | ALU -> DIS |
| ----- | ------ | ----------- | ------------ | ------------ | ---------- | ---------- |
| 0     | 011    | RSTD        | ```010010``` | 1            | 1          | 1          |
| 0     | 100    | ADD1        | ```000001``` | 1            | 0          | 1          |
| 0     | 101    | ADD8        | ```001000``` | 1            | 0          | 1          |
| 0     | 110    | SUB1        | ```111111``` | 1            | 0          | 1          |
| 0     | 111    | SUB8        | ```111000``` | 1            | 0          | 1          |
| 0     | *      | *           | ```000000``` | 1            | 0          | 1          |

Instruction logic for PC phase:

| Phase | Binary | Instruction | ALU B        | DIS -> ALU A | 0 -> ALU A | ALU -> DIS |
| ----- | ------ | ----------- | ------------ | ------------ | ---------- | ---------- |
| 1     | 000    | BRA-0       | ```000001``` | 0            | 0          | 0          |
| 1     | 000    | BRA-1       | ```000010``` | 0            | 0          | 0          |
| 1     | 001    | JMP4        | ```000100``` | 0            | 0          | 0          |
| 1     | 010    | RSTP        | ```000000``` | 0            | 0          | 0          |
| 1     | *      | *           | ```000001``` | 0            | 0          | 0          |

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

