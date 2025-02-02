export const reverseAString = (str) => {
    // Write your code here
    //return str.split('').reverse().join('');
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) 
      result += str[i];
    
    return result;
  }