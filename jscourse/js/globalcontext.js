sayhello();

function sayhello(){
    console.log("hello world");
}

// ok you notice that we called the function first then we wrote the body of the function  but it is fine it executes
// because java script have the global context concept when ever the code executes the js engines registeres the functions and all stuff
// as global stuff so that you can use them wherever you want
//ok simply whenever we write some piece of code there is context collecting all this stuff so need not to execute to get registered

// whenever we click on run the execution context will come into picture it takes info from global context and starts executing
// for browers mostly the global context is "window"

