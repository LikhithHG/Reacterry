export const validateObject = (users) => {
    // Write your code here
    //return users.every(user => user?.firstName);
    for (let i = 0; i < users.length; i++) 
    {
      if (!users[i]?.firstName)
        return false;
    }
    return true;
  }