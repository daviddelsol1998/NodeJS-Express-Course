/**
 * template literals are the JS equivalent of Python's f'strings'
 * 
 * Long way of formating
        const name = "Max";
        const age = 29;
        console.log("My name is " + name + " and I am " + age + " years old.");
 */

// new way of formating with template literals.

const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);
// we use  "`" to wrap the string, and "${to fill in values within string.}"
