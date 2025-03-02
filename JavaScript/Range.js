export const range = (start, end, step = 1) => {
    // Write your code here
    if(step <= 0 || step >= end)
      return [];
    
    const result = [];
    for(let i = start; i < end; i += step)
    {
      result.push(i);
    }
    return result;
  }