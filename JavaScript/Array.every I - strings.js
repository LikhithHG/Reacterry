export const validateStrings = (array) => {
    // Write your code here
    /*
      The .every() method in JavaScript is used to test whether all elements in an array pass a given condition. 
      It returns true if all elements satisfy the condition; otherwise, it returns false.
  
      array.every(callback(element, index, array), thisArg)
      callback: A function that runs for each element in the array.
      element: The current element being processed.
      index (optional): The index of the current element.
      array (optional): The array every() is called on.
      thisArg (optional): A value to use as this when executing the callback
    */
    //return array.every((element) => typeof element === 'string');
    for (let i = 0; i < array.length; i++) 
    {
      if (typeof array[i] !== 'string') 
        return false;
    }
    return true;
  }