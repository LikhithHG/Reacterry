export const getLongerThanFour = (array) => {
    // Write your code here
    // return array.find(str => str.length > 4) || null;
  
    for (let i = 0; i < array.length; i++) 
    {
      if (array[i].length > 4) 
        return array[i];
    }
    return null;
  }