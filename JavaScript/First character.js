export const firstCharacter = (str) => {
    // Write your code here
    const charMap = new Map();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charMap.set(char, (charMap.get(char) || 0) + 1);
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charMap.get(char) === 1) {
        return char;
      }
    }
  
    return null;
}