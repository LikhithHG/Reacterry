export const sortStrings = (array) => {
    // Write your code here
    // const newArray = array.slice();
    // newArray.forEach((string, index) => {
    //   const sortedChars = string.split('').sort().join('');
    //   newArray[index] = sortedChars;
    // });
    // return newArray;
    const sortedArray = array.map((string) => {
      return string.split('').sort().join('');
    });
  
    return sortedArray;
  }