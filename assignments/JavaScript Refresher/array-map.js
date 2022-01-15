const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
//***MAP*** // iterates throguh each item in array
//1. Get array of all names
const names = characters.map((character) => character.name);

//2. Get array of all heights
const heights = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const namesAndHeights = names.map((character) => ({
  name: character.name,
  height: character.height,
}));
//4. Get array of all first names
