# TypeScript Type Error: Combining Arrays of Different Types
This example demonstrates a common TypeScript type error that occurs when attempting to combine arrays of different types using the spread syntax. The `combineArrays` function is designed to work with number arrays, but it's called with a string array, leading to a type error.

## Bug
The `bug.ts` file contains the erroneous code.  The type error occurs on the line where `combineArrays` is called with `array2`, which is of type `string[]`.

## Solution
The `bugSolution.ts` file shows how to resolve the type error.  The solution either uses type assertion or generics to allow combining arrays of different types appropriately. 