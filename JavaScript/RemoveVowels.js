export const removeVowels = (str) => {
    // Write your code here
    const vowels = new Set('aeiouAEIOU');
    const chars = str.split('');
    const filteredChars = chars.filter(char => !vowels.has(char));
    return filteredChars.join('');
  }