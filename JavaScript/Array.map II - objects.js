export const getAges = (users) => {
    // Write your code here
    //return users.map(user => user.age);
    let ages = [];
    users.forEach(user => {
      ages.push(user.age);
    });
    return ages;
  }