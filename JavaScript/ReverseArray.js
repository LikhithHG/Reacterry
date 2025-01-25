export const reverseArray = (array) => {
    // Write your code here
    //return array.reverse();
    const reversed = [];
    for(let i = array.length - 1; i >= 0; i--)
      reversed.push(array[i]);
    return reversed;
  }