export const maxCharacters = (str) => {
    // Write your code here
    let charCount = {};
    for(let char of str)
      charCount[char] = charCount[char] + 1 || 1;
    
    let maxChar = null;
    let maxCount = 0;
  
    for(let char in charCount)
    {
      if(charCount[char] > maxCount)
      {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
    return maxChar;
  }