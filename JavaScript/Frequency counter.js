export const frequencyCounter = (arr) => {
    // Write your code here
    return arr.reduce((counter, element) => {
      if(!counter[element])
        counter[element] = 1;
      else 
        counter[element]++;
      return counter;
    }, {});
  };