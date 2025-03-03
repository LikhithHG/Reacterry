export const validatePasswords = (first, second) => {
    // Write your code here
    if (first !== second)
      return false;
    
     const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
     return passwordFormat.test(first);
  }