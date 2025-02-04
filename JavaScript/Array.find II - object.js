export const getAnAdult = (users) => {
    // Write your code here
    //return users.find(user => user.age >= 18) || null;
    for(let i = 0; i < users.length; i++)
    {
      if(users[i].age >= 18)
        return users[i];
    }
    return null;
  }