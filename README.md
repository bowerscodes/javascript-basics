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


### Object Functions





<!-- We can also make things happen conditionally - for example, when we reach the end of our `flightplan`:
```JavaScript
if (!nextAirportElement) {
        this.renderMessage('End of the Line!');
    } else {
        this.renderMessage(`Now departing ${aeroplane.currentAirport.name}`);
``` -->


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








