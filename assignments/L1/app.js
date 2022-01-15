/**
 * This is the root file for the server usually called "server.js" or "app.js".
 *
 * to import modules needed for server functionality we need to create a variable.
 * that variable is usually called the same as the module you are importing.
 * require is python equivalent of import and module name is pass as string.
 *
 * to import a module that you created you need to use paths "/" or "./"
 *
 */

// const http = require('http'); // this is looking for a core module.
// const routes = require('./routes'); // this is my custom module.

// //to create a server use:
// const server = http.createServer(routes); // takes a request listener, needs to be created manually with 2 parameters
// // response and request.

// server.listen(3000); // constantly listen to incoming request /takes in an optional port on development.

const http = require("http");

const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
