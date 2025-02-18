export const getInitials = (user) => {
    // Write your code here
    // const { firstName, middleName, lastName } = user;
    // let initials = firstName.charAt(0).toUpperCase() + ". ";
    // if (middleName) 
    //   initials += middleName.charAt(0).toUpperCase() + ". ";
    // initials += lastName.charAt(0).toUpperCase() + ".";
    // return initials;
    const names = [user.firstName, user.middleName, user.lastName].filter(name => name);
    return names.map(name => name.charAt(0)).join('. ') + '.';
  }