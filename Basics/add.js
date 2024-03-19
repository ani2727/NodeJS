//const math = require("module") // this will give an error as there is no inbuilt module called math.
                                // so when we want to use a module which is created by us use require("./module")
const Module = require("./Module");

//console.log("My name is", Module.add(2,4));

console.log("My name is " ,Module.add(2,4));