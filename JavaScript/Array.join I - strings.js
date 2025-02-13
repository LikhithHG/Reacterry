export const joinElementsWithUnderscore = (array) => {
    // Write your code here
    //return array.join("_");
    let result = "";
    for (let i = 0; i < array.length; i++) 
    {
      result += array[i];
      if (i < array.length - 1)
        result += "_";
    }
    return result;
  }