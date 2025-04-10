export const twoSum = (nums, target) => {
    // Write your code here
    const map = new Map();
  
    for(let i = 0; i < nums.length; i++)
    {
      let complement = target - nums[i];
      if(map.has(complement))
        return [map.get(complement), i];
      
      map.set(nums[i], i);
    }
    return [];
  }