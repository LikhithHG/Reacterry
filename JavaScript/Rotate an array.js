export const rotateArray = (arr, n) => {
    // Write your code here
    const len = arr.length;
      n = n % len; // Handle cases where n > length of array
      let rotatedArr = [...arr]; // Create a copy to avoid modifying the original array
  
      const reverse = (arr, start, end) => {
          while (start < end) {
              [arr[start], arr[end]] = [arr[end], arr[start]];
              start++;
              end--;
          }
      };
  
      reverse(rotatedArr, 0, n - 1); // Reverse the first n elements
      reverse(rotatedArr, n, len - 1); // Reverse the remaining elements
      reverse(rotatedArr, 0, len - 1); // Reverse the whole array
  
      return rotatedArr;
  
  
    // const len = arr.length;
    // const steps = n % len;
  
    // return [...arr.slice(steps), ...arr.slice(0, steps)];
  }