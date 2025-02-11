export const getAdultUsers = (users) => {
    // Write your code here
    //return users.filter(user => user.age >= 18);
    const adult = [];
    users.forEach(user => {
      if(user.age >= 18)
        adult.push(user);
    })
    return adult;
  }