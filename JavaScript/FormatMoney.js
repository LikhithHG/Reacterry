export const formatMoney = (amount) => {
    // Write code here
    //The function formats the monetary amount by concatenating a "$" symbol with the amount formatted using the toLocaleString method. 
    //toLocaleString() is a method in JavaScript that is used to format a number as a string, using the local conventions for formatting. 
    //The toLocaleString method takes in two arguments, undefined and an options object, which specifies that the minimum and maximum number of fractional digits should be 2.
    return "$" + amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }