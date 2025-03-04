export const areArraysEqual = (arr1, arr2) => {
    // Write your code here
    if (arr1.length !== arr2.length)
      return false;
    // for (let i = 0; i < arr1.length; i++) 
    // {
    //   if (arr1[i] !== arr2[i]) 
    //     return false;
    // }
    // return true;
    return arr1.every((value, index) => value === arr2[index]);
  };