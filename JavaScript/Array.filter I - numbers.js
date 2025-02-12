export const getLessThanFive = (numbers) => {
    // Edit this line
    //return numbers.filter(number => number < 5)
    const result = [];
    for (let i = 0; i < numbers.length; i++) 
    {
        if (numbers[i] < 5)
            result.push(numbers[i]);
    }
    return result;
}