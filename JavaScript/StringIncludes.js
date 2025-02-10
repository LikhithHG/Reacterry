export const containsSubstring = (string, substring) => {
  // Write your code here
  //return string.includes(substring);
  for(let i = 0; i < string.length; i++)
  {
    let found = true;
    for(let j = 0; j < substring.length; j++)
    {
      if(string[i + j] !== substring[j])
      {
        found = false;
        break;
      }
    }
    if(found)
      return true;
  }
  return false;
}