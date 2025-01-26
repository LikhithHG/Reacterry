export const isLeapYear = year => {
    // Write your code here
    if(year <= 0)
      return false;
  
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
      return true;
    
    return false;
  };