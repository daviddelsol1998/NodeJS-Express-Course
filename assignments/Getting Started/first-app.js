// console.log('Hello world in JavaScript!');
const fs = require('fs'); // fs stands for file system. 

fs.writeFileSync('newfile.txt', "Hello world from node js");

// fs object has a method called writeFileSync that creates a new file with first parameter as the path and the second as the text.