// ok before getting into arrays part two lets talks about arrow fuctions we hae seen normal functions and function in variable till now
// lets have a glance about those
// function istwo(element ){           |           var istwo = function(element){
//                                     |                    return element%2===0;
//     return element%2===0;           |              };
// }                                   |        
// above code works fine lets see similar to above

var istwo = (element) =>{
    return element%2===0;
}
console.log(istwo(3));
// this is similar to above but we call these as arrow functions.
// now lets talk about the call back functions in the java script.
// call back functions are different types in java script
// one of the way using array.every method

var result =[2,4,6,8].every(istwo);
console.log(result);

// another way of doing it by using arrow functions

var resu = [2,3,4,8].every((e)=>e%2===0)       // arrow functions: having parenthisis marking to curly braces by arrow
                                                
console.log(resu);                               //()=>{}
