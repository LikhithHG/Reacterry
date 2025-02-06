export const findIndexOf = (array, value) => {
    // Write your code here
    //return array.indexOf(value);
    for(let i = 0; i < array.length; i++)
    {
      if(array[i] === value)
        return i;
    }
    return -1;
  }