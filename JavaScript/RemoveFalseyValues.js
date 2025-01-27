export const removeFalsy = (arr) => {
    // Write your code here
    //return arr.filter(Boolean);
    
    const result = [];
  
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i])
        result.push(arr[i]);
    }
    return result;
  }