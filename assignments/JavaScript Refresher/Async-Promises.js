/* Async and Promises:
Async code does not run inmidiately but does "call back". Does not keep synchronous code from running.

Synchronous code runs inmidiately example
console.log('Hello');
*/

const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done');
    }, 1500);
};


setTimeout(() => { // this is async code
    console.log('Timer is done');
    fetchData((text) => {
        console.log(text);
    });
}, 2000);

console.log('Hi'); // synchronous code
console.log('Hello');