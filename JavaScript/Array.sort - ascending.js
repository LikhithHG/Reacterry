export const sortAscending = (numbers) => {
    // Write your code here
    //return numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length - 1; i++) 
    {
        for (let j = i + 1; j < numbers.length; j++) 
        {
          if (numbers[i] > numbers[j])
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
    }
    return numbers;
  }