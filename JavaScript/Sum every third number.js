export const sumOfThirds = (arr) => {
    // Write your code here
    // let sum = 0;
    // for(let i = 0; i < arr.length - 1; i += 3)
    //   sum += arr[i];
    // return sum;
  
    return arr.reduce((acc, curr, index) => {
      if((index + 1) % 3 === 1)
        return acc + curr;
      else
        return acc;
    }, 0);
  }