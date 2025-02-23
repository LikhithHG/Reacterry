export const removeValues = (arr1, arr2) => {
    // Write your code here
    for(let i = 0; i < arr2.length; i++)
    {
      let index = arr1.indexOf(arr2[i]);
      while(index !== -1)
      {
        arr1.splice(index, 1);
        index = arr1.indexOf(arr2[i]);
      }
    }
    return arr1;
  }