export const findLastIndexOf = (array, value) => {
    // Write your code here
    let index = -1;
    for(let i = 0; i < array.length; i++)
    {
      if(array[i] === value)
        index = i;
    }
    return index;
  }