export const randomInRange = (min, max) => {
    // Write your code here
    //Math.random() method returns a random floating-point number between 0 (inclusive) and 1 (exclusive), 
    //so we need to multiply it by the difference between max and min, and then add min to ensure that the random integer is within the specified range.
    return Math.floor(Math.random() * (max - min) + min);
  }