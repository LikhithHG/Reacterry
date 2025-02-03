export const findLastIndexOf = (string, substring) => {
    // Write your code here
    //return string.lastIndexOf(substring);
    const stringLength = string.length;
    const subStringLength = substring.length;
  
    for(let i = stringLength - subStringLength; i >= 0; i--)
    {
      let j;
      for(j = 0; j < subStringLength; j++)
      {
        if(string[i + j] !== substring[j])
          break;
      }
      if(j === subStringLength)
        return i;
    }
    return - 1;
  }