export const mostCommon = (arr) => {
    // Write your code here
    const map = {};
    let maxCount = 0;
    let mostCommon = null;
  
    for(let element of arr)
    {
      if(map[element])
        map[element] += 1;
      else  
        map[element] = 1;
  
      if(map[element] > maxCount)
      {
        maxCount = map[element];
        mostCommon = element;
      }
    }
    return mostCommon;
  }