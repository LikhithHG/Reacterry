export const mapToUppercase = (names) => {
    // Write your code here
    //return names.map(name => name.toUpperCase());
    let UpperCaseNames = [];
    names.forEach(name => {
      UpperCaseNames.push(name.toUpperCase());
    })
    return UpperCaseNames;
  }