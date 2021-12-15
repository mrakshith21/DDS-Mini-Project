# Aim:

### Detection of both SA0 and SA1 faults on a HALF-ADDER circuit implemented by AND, OR gates.

To implement half adder in HDL using 3 AND gates and 1 OR gate and analyse the truth table of half adder with SA1 or SA0 faults and find test vectors to detect every possible fault.


# Theory:

## Introduction:

A stuck-at fault is an abstract fault model used in post manufacturing process by fault simulators to mimic a manufacturing defect within an integrated circuit. Individual signals and pins are assumed to be stuck at Logical '1' or '0'. For example, an input is tied to a logical 1 state during test generation to assure that a manufacturing defect with that type of behavior can be found with a specific test pattern. Not all faults can be analyzed using the stuck-at fault model.


## Fault Detection:

Ideally all possible inputs and outputs need to be tested to make sure there are no faults in the circuit. However in most cases this is impractical. In our single half adder circuit, we have 4 possible inputs and outputs, but if we take for example, a circuit that can add two 32 bit numbers, then we will need to check 2^32 * 2^32 = 2^64 inputs which is impractical. Hence, in complex circuits, test vectors are used which are input sequences that give different outputs if there is a fault present. A single test vector could detect many faults thus we don’t need to check all input sequences. There are disadvantages to this process that is all possible fault locations in the circuit needs to be known else a fault could go undetected by existing test vectors. In our case since we have a simple circuit it is possible to check all input sequences and their respective outputs for any faults.

## Fault Sites in Half Adder:

-----insert circuit image-----

In the above circuit, there are 8 signal lines and thus 8 potential fault sites. 

----put truth tables and describe each one-----


# Procedure: 
---to be completed after simulation is done---
