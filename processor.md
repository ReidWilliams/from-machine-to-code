## Programmable machine design

#### Instruction memory
3 bit program counter, 8 instruction programs

#### Output + Display
Two 3-bit output registers set the X and Y coordinates of an 8x8 display. 

#### ALU
ALU adds two 3 bit numbers.

#### Control logic
Two phases: first phase updates display, second phase updates PC. Separated into two phases because there's only one ALU and each phase needs to use it. Each phase is one clock cycle, processor does 1 instruction per two clock cycles.

Controls second ALU input to do constant additions of 1, 4, 8, and subtractions of 1, 8. 

Inputs:

- Phase bit
- 3 instruction bits
- 1 User input bit

Outputs: 
- 3 ALU B input bits
- DIS <-> ALU A: 1 means route one of the display registers to ALU input, 0 means route PC register. Also routes output of ALU to display / PC register.
- Y <-> ALU A: 1 means route display Y register to ALU, 0 means routes X. Also routes output of ALU to X / Y.
- 0 -> DIS: force all display bits to 0
- 0 -> PC: force PC register to 0

#### Instruction set
Instructions are 3 bits which selects one of 8 op-codes.

Instruction logic for display phase:

| Phase | Binary | Instruction | ALU B     | DIS <-> ALU A | Y <-> ALU A | PC <-> ALU A | 0 -> DIS  |
| ----- | ------ | ----------- | --------- | ------------- | ----------  | ------------ | --------- |
| 0     | 011    | RSTD        | ```---``` | 1             | 1           | 0            | 1         |
| 0     | 100    | ADD1        | ```001``` | 1             | 0           | 0            | 0         |
| 0     | 101    | ADD8        | ```001``` | 1             | 1           | 0            | 0         |
| 0     | 110    | SUB1        | ```111``` | 1             | 0           | 0            | 0         |
| 0     | 111    | SUB8        | ```111``` | 1             | 1           | 0            | 0         |
| 0     | 0xx    | x           | ```---``` | 0             | -           | 0            | 0         |

Instruction logic for PC phase:

| Phase | Binary | Instruction | ALU B     | DIS <-> ALU A | Y <-> ALU A | PC <-> ALU A | 0 -> PC |
| ----- | ------ | ----------- | --------- | ------------- | ----------- | ------------ | ------- | 
| 1     | 000    | BRN-0       | ```001``` | 0             | -           | 1            | 0       |
| 1     | 000    | BRN-1       | ```010``` | 0             | -           | 1            | 0       |
| 1     | 001    | JMP4        | ```100``` | 0             | -           | 1            | 0       |
| 1     | 010    | RSTP        | ```---``` | 0             | -           | 1            | 1       |
| 1     | 1xx    | x           | ```001``` | 0             | -           | 1            | 0       |

#### Controlled fall
> Program that uses input move a cursor left and right as it falls

```
ADD8
BRN
JMP4
ADD1
RST
RST
SUB1
RST
```
