export const isPalindrome = (str) => {
    // Edit this line
    // str = str.toLowerCase();
    // return str === str.split('').reverse().join('');
    str = str.toLowerCase();
    let start = 0, end = str.length - 1;
    while (start < end) 
    {
        if (str[start] !== str[end]) 
            return false;
        start++;
        end--;
    }
    return true;
}