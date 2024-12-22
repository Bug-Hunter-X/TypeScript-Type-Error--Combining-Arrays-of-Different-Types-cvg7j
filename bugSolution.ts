function combineArraysGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4,5,6];

const combinedArray: number[] = combineArraysGeneric(array1, array2);

const array3: string[] = ['a', 'b', 'c'];
const array4: string[] = ['d','e','f'];
const combinedArray2: string[] = combineArraysGeneric(array3, array4);
//Alternative solution using Type Assertion
function combineArraysTypeAssertion(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const array5: number[] = [1, 2, 3];
const array6: any[] = ['a', 'b', 'c'];

const combinedArray3: number[] = combineArraysTypeAssertion(array5, array6 as number[]); //Type assertion - Use with caution