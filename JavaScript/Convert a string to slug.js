export const convertToSlug = (str) => {
    // Write your code here
    if(str === '')
      return '';
  
    return str.split(' ').join('-').toLowerCase();
  }