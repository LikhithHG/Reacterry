export const sumNumbers = (str) => {
    // Write your code here
    if(!str)
      return 0;
    
    const nums = str.split(',');
    return nums.reduce((acc, num) => acc + parseInt(num), 0);
  }