// objects kinda equivalet to dictionaries in python.

const person = {
    name: 'Daniel',
    age: 22,
    greeting()  {
        console.log('Zap girl... my name is ' + this.name);
    }
}

// Arrays
const things  = ['Computer',2,false, {
    name: 'Daniel',
    age: 22,
    greeting()  { // when storing a method just use METHODNAME()
        console.log('Zap girl... my name is ' + this.name);
    }} ]
// looping through each thing

// for (let thing of things) { // we have to use "of" instead of "in"
//     // console.log(thing); // "of" returns each item, "in" return the index of each item.
// }


//Array methods (map) to modify each array element.

let hobbies = ['Watching AEW', 'Playing guitar'];

// console.log('Unmodified array: * ' + hobbies);


// console.log('Modified array: * ' + hobbies.map(item => 'Hobby: '+ item));



// ----------------------------------------------------------------
// rest and spread operators

let copiedArray = hobbies.slice(); //slice methods copy's a portion of the array or without arguments the entire array.

let newCopy = [...copiedArray]; // "..." is the spread operator (it takes everything inside of item next to the "..." and puts it inside of whatever outer structure)
console.log(copiedArray);
console.log(newCopy);

const person1 = {
    name: 'John',
    age: 34
};

personCopy = {...person1};

console.log(personCopy);