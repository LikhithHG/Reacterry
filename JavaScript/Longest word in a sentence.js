export const findLongestWord = (sentence) => {
    // Write your code here
    if (!sentence) return null
    const words = sentence.split(' ');
  
    let longestWord = null;
    let longestWordIndex = null;
  
    words.forEach((word, index) => {
      if (!longestWord || word.length > longestWord.length) 
      {
        longestWord = word;
        longestWordIndex = index;
      } 
      else if (word.length === longestWord.length && index < longestWordIndex) 
      {
        longestWord = word;
        longestWordIndex = index;
      }
    });
  
    return longestWord;
  }