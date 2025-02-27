export const groupBy = (array, key) => {
    // Write your code here
    return array.reduce(function(returnValue, object) {
      (returnValue[object[key]] = returnValue[object[key]] || []).push(object);
      return returnValue;
    }, {});
  }