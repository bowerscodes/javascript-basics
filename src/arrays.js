const getNthElement = (index, array) => {
  if (index < array.length){
    return array[index]
  }
    else { 
    let cycled = index % array.length
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
  return array.splice(index, 1)
};

const numbersToStrings = numbers => {

  return numbers.map(number => number.toString())
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase())
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""))
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 == 0)
};

const removeNthElement2 = (index, array) => {
  return array.filter((elem, i) => i !==index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str))
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
