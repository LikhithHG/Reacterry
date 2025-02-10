export const isInArray = (array, value) => {
  // Write your code here
  //return array.includes(value);
  for (let i = 0; i < array.length; i++) 
  {
    if (array[i] === value) 
      return true;
  }
  return false;
}