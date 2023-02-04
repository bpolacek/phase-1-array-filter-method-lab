//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

/*const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];*/


function findMatching(array, string){
    const matchingDrivers =  array.filter((x) => x.toLowerCase() == string.toLowerCase());
    return matchingDrivers;
}

function fuzzyMatch(array, string) {
    const matchingLetters = array.filter((x) => x[0] === string[0]);
    return matchingLetters;
}

function matchName(array, string) {
    const matchingDriversTwo = array.filter((x) => x.name === string);
    return matchingDriversTwo;
}