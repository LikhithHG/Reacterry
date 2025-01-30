export const sumOfEvens = (arr) => {
    // Write your code here
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++)
    // {
    //   if(arr[i] % 2 === 0)
    //     sum += arr[i];
    // }
    // return sum;
    return arr.reduce((sum, num) => {
      if(num % 2 === 0)
        return sum + num;
      else  
        return sum;
    }, 0);
  }