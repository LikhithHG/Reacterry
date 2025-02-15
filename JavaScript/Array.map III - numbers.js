export const doubleNumbers = (numbers) => {
    // Edit this line
    //return numbers.map((number) => number * 2);
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);
    }
    return result;
}