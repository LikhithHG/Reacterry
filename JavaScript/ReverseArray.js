export const reverseArray = (array) => {
    // Write your code here
    //return array.reverse();
    const reversed = [];
    for(let i = array.length - 1; i >= 0; i--)
      reversed.push(array[i]);
    return reversed;
  }

  /*
  export const reverseAnArray = (arr) => {
  // Write your code here
  //arr.reverse();
  for (let i = 0; i < arr.length / 2; i++) 
  {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
  */