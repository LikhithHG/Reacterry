export const findIndexOf = (string, substring) => {
    // Write your code here
    //return string.indexOf(substring);
    const stringLength = string.length;
    const substringLength = substring.length;
    let matchIndex = -1;
    
    for (let i = 0; i <= stringLength - substringLength; i++) 
    {
      let j;
      for (j = 0; j < substringLength; j++) 
      {
        if (string[i + j] !== substring[j])
          break;
      }
      if (j === substringLength) 
      {
        matchIndex = i;
        break;
      }
    }
    
    return matchIndex;
  }