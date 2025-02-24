export const getStringsWithVowels = (array) => {
    // Write your code here
    // const vowels = ['a','e','i','o','u'];
    // return array.filter((string) => {
    //   return vowels.includes(string.charAt(0).toLowerCase());
    // });
    const vowels = ['a','e','i','o','u'];
    const result = [];
  
    for(let i = 0; i < array.length; i++)
    {
      const string = array[i];
      const firstChar = string.charAt(0).toLowerCase();
      if(vowels.includes(firstChar))
        result.push(string);
    }
    return result;
  }