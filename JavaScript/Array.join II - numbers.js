export const joinWithCommas = (array) => {
    // Write your code here
    //return array.join(",");
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) {
        result += ",";
      }
    }
    return result;
  }