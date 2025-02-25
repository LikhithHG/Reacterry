export const isPalindrome = (number) => {
    // Write your code here
    let n = number;
    let result = 0;
    while(n > 0)
    {
      let unit = n % 10;
      n = Math.floor(n / 10);
      result = (result * 10) + unit;
    }
    return result === number;
  
    //const stringNum = number.toString();
    //return stringNum === stringNum.split('').reverse().join('') === true ? true : false
  
  }