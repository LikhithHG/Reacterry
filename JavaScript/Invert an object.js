export const invertObject = (obj) => {
    // Write your code here
    // let inverted = {};
    // for(const key in obj)
    // {
    //   inverted[obj[key]] = key;
    // }
    // return inverted;
  
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
    }, {});
  };