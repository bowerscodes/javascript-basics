const getNthElement = (index, array) => {
  if (index < array.length){
    return array[index]
  }
    else { 
    cycled = index % array.length
    return array[cycled]
  }
};

const arrayToCSVString = array => {
  return array.join()
};

const csvStringToArray = string => {
  return string.split(',')
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  return array.concat(element)
};

const removeNthElement = (index, array) => {
  // Couldn't get 'filter' to work - only way I could make this work:
  array.splice(index, 1)
};

const numbersToStrings = numbers => {
  // // Can't do
  // numbers.toString()
};

const uppercaseWordsInArray = strings => {
  // // can't do
  // return strings.toUpperCase()
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
