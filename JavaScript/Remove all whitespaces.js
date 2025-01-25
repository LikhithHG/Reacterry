export const removeWhitespaces = (string) => {
    // Write your code here
    let result = '';
    for(let i = 0; i < string.length; i++)
    {
      if(string[i] !== ' ' && string[i] !== '\n' && string[i] !== '\t')
        result += string[i];
    }
    return result;
  }