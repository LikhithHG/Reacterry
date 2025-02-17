export const truncateWithEllipsis = (str, n) => {
    // Write your code here
    if(str.length <= n)
      return str;
    return str.substring(0, n) + '...';
  }