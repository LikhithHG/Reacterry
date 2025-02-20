export const findLongest = (array) => {
    // Write your code here
    return array.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, '');
  }