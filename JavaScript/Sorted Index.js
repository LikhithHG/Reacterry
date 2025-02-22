export const sortedIndex = (arr, value) => {
    // Write your code here
    let low = 0;
    let high = arr.length;
  
    while(low < high)
    {
      let mid = Math.floor((low + high) / 2);
      if(arr[mid] < value)
        low = mid + 1;
      else 
        high = mid;
    }
    return low;
  }