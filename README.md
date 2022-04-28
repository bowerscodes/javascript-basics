# JavaScript Basics 👨🏼‍💻
### Introduction
This project documents my progress through the JavaScript Basics module at [ManchesterCodes](https://github.com/mcrcodes). Originally a set of blank functions, these are my solutions to the requirements set out in the accompanying Node.js Unit Tests.
This was an excellent opportunity to learn both JavaScript Functions, and Node testing, just weeks into my coding journey. The project now serves as my first JavaScript Library - containing various functions which simplify some of the more common tasks we need to carry out upon JavaScript data types: arrays, booleans, numbers, objects and strings.

## Contents
* [Languages & Technologies](#Languages--Technologies)
* [Scope of Functionalities](#Scope-of-Functionalities)
* [Number Functions](#Number-Functions)
* [String Functions](#String-Functions)
* [Boolean Functions](#Boolean-Functions)
* [Array Functions](#Array-Functions)
* [Object functions](#Object-Functions)
* [Unit Testing](#Unit-Testing)
* [Examples of Use](#Examples-of-Use)
* [Project Status](#Project-status)
* [Sources & Credits](#Sources--credits)

## Languages & Technologies
### Languages
* JavaScript

### Technologies
* Node.JS
* Jest


## Scope of Functionalities
### Number Functions
This exercise was focused on practicing the act of writing functions in JavaScript. Purely mathematical, this section of the project contains functions for undertaking tasks ranging from simple `add(a, b)`, `divide(a, b)` and `power(a, b)` functions, to ones which required slightly more research to solve, such as `quotient(a, b)`, `roundUp(a)`, and `absolute(a)`.

```JavaScript
function quotient (a, b) {
  return(Math.trunc(a/b))
}
```

### String Functions
Strings are different to integers, in that they hold no numerical value - and so the options we have in terms of manipulating their values, are slightly more limited. However, strings are a common web data type - so there are some common functions we may wish to carry out upon them: from a simple `sayHello(name)` function for a web form, to other routine tasks such as `countCharacters(string)` and `firstCharacters(string, n)`.

```JavaScript
function sayHello (string) {
  return "Hello, " + string + '!';
};
```

### Boolean functions
This section of the library contains functions which both operate upon boolean values (i.e. `true`, `false`), as well as producing boolean outputs from integer and string inputs. This part of the course at ManchesterCodes also introduced us to the concept of *truthiness* and *equivalence* - which naturally led us to exploring `if` statements.

For example, we may wish to return a true / false response based on the value of multiple inputs using AND / OR logic:

```JavaScript
function both(a, b) {
  if (a == true && b == true)
    return true
  else 
    return false
};
```
```JavaScript
function either(a, b) {
  if (a == true || b == true)
    return true
  else
    return false
};
```

With non-boolean values, we may wish to perform other tasks - such as finding out whether a phone number begins with a 0 using `startsWith(char, string)`, or finding out if a number is a square number, with `isSquare(a)`:

```JavaScript
function startsWith(char, string) {
  if (string.charAt(0) == char)
    return true
  else
    return false
};
```
```JavaScript
function isSquare(a) {
    if (Math.sqrt(a) % 1 == 0)
      return true
    else 
      return false
};
```

### Array functions
Arrays are more complex data types than integers, strings or booleans because the data is stored in a sequence, with each item's position referred to as its index, beginning at 0. We may wish to retrieve an item from within an array, using `getNthElement(index, array)`:

```JavaScript
const getNthElement = (index, array) => {
  if (index < array.length)
    return array[index]
    else { 
    let cycled = index % array.length
    return array[cycled]
  }
};
```
*where `let cycled = index % array.length` cycles through the array if the index is greater than its length.*

It is also common to need to sum an array of integers:

```JavaScript
const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0)
};
```

Finally, we may also want to do something more complex - such as returning an array with an element removed, without manipulating the original array:

```JavaScript
const removeNthElement2 = (index, array) => {
  return array.filter((elem, i) => i !==index)
};
```

### Object Functions
Objects are collections of data, stored in `key : value` pairs, which enables us to give an item multiple values, as opposed to solely its inherent value. Take a set of applicants for bus passes - we would store them as objects, with attributes such an name, age, address, etc. We may need a function which quickly checks eligibility:

```JavaScript
const isOver65 = person => {
  if (person.age > 65) {return true;} else {return false;}
};
```

Or, consider a car sales website, which needs a function to return all objects where `Manufacturer : Honda`:

```JavaScript
const findHondas = cars => {
  return cars.filter(elem => elem.manufacturer === 'Honda')
};
```

Finally, we may wish to create an obect from inputs `name` and `age`, which returns a message to the user:

```JavaScript
const createTalkingPerson = (name, age) => {
  const person = {name: name, age: age, introduce: function (string) {
    return `Hi ${string}, my name is ${name} and I am ${age}!`}};
  return person;
};
```
where the introduce function is called as a Method on the Object, with another name passed in as a string:

```JavaScript
bill.introduce('Fred')
```
`'Hi Fred, my name is Bill and I am 40!'`


## Unit Testing
Accompanying all of the Function lists, is an accompanying node `.test` file for each of the data types. This served three purposes during the exercise - to test our functions for correctness, to provide us with a set of expectations to work back from, but also to get us used to writing our own unit tests, to further validate the results of our functions. This was my first introduction to Unit Testing, and I found this Test-Driven Development approach to programming to be highly rewarding. As a learner it allowed me to approach the task from the perspectives of both refinement, and diagnosis: Does the code itself pass? If so, is that enough? Could the tests be developed further to minimise bugs? If the tests didn't pass, what are the requirements defined in the test suite? Could it be that numbers are being passed in as strings, and not integer values, for example?

```JavaScript
describe('isEqual', () => {
  it('returns whether the two values are equal', () => {
    expect(isEqual(10, '10')).toBe(false);
  });
});
```

For slightly more specific tasks, the test-driven approach to this project was crucial in my understanding of how some of JavaScript's more complex array Methods, such as `.splice()` and `.filter()` actually process the data behind the scenes:

***removeNthElement()***
*Test Requirements:*
```JavaScript
describe('removeNthElement', () => {
  it('removes the element at position n', () => {
    const array = ['ant', 'bison', 'cockerel', 'duck', 'elephant'];
    removeNthElement(2, array);
    expect(array).toEqual(['ant', 'bison', 'duck', 'elephant']);
    
    const arrayTwo = ['thing 1', 'thing 2', 'thing 3', 'thing 4', 'thing 5'];
    removeNthElement(0, arrayTwo);
    expect(arrayTwo).toEqual(['thing 2', 'thing 3', 'thing 4', 'thing 5']);
  });
});
```
*Solution:*
```JavaScript
const removeNthElement = (index, array) => {
  return array.splice(index, 1)
};
```

***removeNthElement2(index, array)***
*Test Requirements:*
```JavaScript
describe('removeNthElement2', () => {
  it('returns an array with the nth element removed, and does not mutate the original', () => {
    const array = ['bike', 'car', 'train', 'bus'];
    expect(removeNthElement2(2, array)).toEqual(['bike', 'car', 'bus']);
    expect(array).toEqual(['bike', 'car', 'train', 'bus']);
    const arrayTwo = ['cat', 'mouse', 'banana'];
    expect(removeNthElement2(0, arrayTwo)).toEqual(['mouse', 'banana']);
    expect(arrayTwo).toEqual(['cat', 'mouse', 'banana']);
  });
});
```
*Solution:*
```JavaScript
const removeNthElement2 = (index, array) => {
  return array.filter((elem, i) => i !==index)
};
```

The main benefit of the test-driven approach, for me, was having the ability to define precise success criteria, which require multiple process steps, without requiring any knowledge of how to solve the problem. This mentally clears up and organises the coding process for me - the problem can be solved quicker in most cases, because the act of writing the test code reinforces and ultimately decides the logic:

*Test Requirements:*
```JavaScript
describe('sortByLastLetter', () => {
  it('sorts the string by the last character', () => {
    expect(
      sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen'])
    ).toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy']);
    expect(
      sortByLastLetter(['Mo', 'Romy', 'Miguel', 'Martyna'])
    ).toEqual(['Martyna', 'Miguel', 'Mo', 'Romy']);
  });
});
```
*Solution:*
```JavaScript
const sortByLastLetter = strings => {
  return strings.sort((a, b) => a. charCodeAt(a.length -1) - b.charCodeAt(b.length -1))
};
```


## Examples of Use


*Consider the following:*
* **x**
> 

* **y**
> 

* **z**
> 


## Project Status
This project is complete! 🥳

## Sources & Credits
<!-- This project is an adapted remake of a ship tracking project made whilst studying with Manchester Codes. -->








