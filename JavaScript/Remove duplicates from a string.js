export const removeDuplicates = (str) => {
    // Write your code here
    if(str.length === 0)
        return '';
    
    let set = new Set();
    let result = '';
    for(let i = 0; i < str.length; i++)
    {
        if(!set.has(str[i]))
        {
            set.add(str[i]);
            result += str[i];
        }
    }
    return result;
}