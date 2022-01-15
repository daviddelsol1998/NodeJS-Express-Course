const person = {
  name: "John",
  age: 34,
};

const printName = (personData) => {
  console.log(personData.name);
};

printName(person);

/* Destructoring syntax allows to only pass in the attribute that we want of certain object so instead of doing:

const printName = (personData) => {
    console.log(personData.name);
}
*/

const getName = ({ name }) => {
  console.log(name);
};

getName(person);

let favortieNumbers = [7, 3];

const [favNum1, favNum2] = favortieNumbers;
console.log(favNum1);
