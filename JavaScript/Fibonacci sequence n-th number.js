export const getFibonacciNth = (n) => {
    // Write your code here
    if (n === 1) 
      return 0;
    else if (n === 2) 
      return 1;
    else 
    {
      const result = [0, 1];
      for (let i = 2; i < n; i++) 
      {
        const nextNumber = result[i - 1] + result[i - 2];
        result.push(nextNumber);
      }
      return result[result.length - 1];
    }
  }