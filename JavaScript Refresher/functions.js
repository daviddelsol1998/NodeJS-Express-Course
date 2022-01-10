/* --------------------------------
Variables and simple datatypes:
- The keyword var is requird to declare a variable.
- Variable types are implied by the datatype stored in value.

- var is an outdated keyword in ES6 we use let and const
const don't change, let can change. when const is changed it generates an error.
*/
const name = 'David'; //string
let age = 23; // number
const hasHobbies = true; // boolean



/* --------------------------------
Functions:
- The keyword function is requird to define a function.
it is the python equivalent of def
- syntax goes as folllows:
*/
function sumarizeUser(userName, userAge, userHasHobbies) {
    return ('Name is ' + userName + ', age is ' + userAge + ', has hobbies is: ' + userHasHobbies);
}

console.log(sumarizeUser(name,age,hasHobbies));

/* --------------------------------
Arrow Functions: 
functions stored in a variable.
- we can decalre a variable using let or const depending on whether or not we intend to re assigned the value.
- we skip the function keyword and use the arrow keyword "=>" after the "()""
then follow the same syntax as an standard function without a name.
- the anonymous function can be called by variablename()
example:
console.log(userSummary(userName, userAge, userHasHobbies));
*/
const userSummary = (userName, userAge, userHasHobbies) => {
    return ('Name is ' + userName + ', age is ' + userAge + ', has hobbies is: ' + userHasHobbies);
}


// console.log(userSummary(name,age,hasHobbies));

/*
Short arrow functions that return one line statments
example:
const returnSum = (a,b) => {
    return a + b;
};
can be re written as 
*/

const add = (a,b) => a+b;
// console.log(add(2,3));
