// sperad and rest operators
// spread operator -> ...
// rest opeator -> args

// var returned = Math.max(2,4,6,8,0);
// console.log(returned);

// var obj = {};
// Object.assign(obj,{a:1,b:2,c:3},{e:5,f:6,g:7,s:8}); // output :{ a: 1, b: 2, c: 3, e: 5, f: 6, g: 7, s: 8 }
// console.log(obj);

function sumone(a,b){
 return a+b;
}

//console.log(sumone(2,3));
// that is normal function so what if we pass an array containg 2 elements
// it gives an error bcz the function accepts 2 variables
// here comes the magic the spread operator passes a group like an array into multiple
// values.

var myarray =[2,3];
console.log(sumone(...myarray)); // it gives 5 
// what if the array containing more than the elemets required 
// the ans is if sumone(2,3,1) here also we passed more than the required elements
// but the output is 5 as rest of the elements will be ignored it follows same here

// REST OPEARTOR
// we have seen that what spread opeator do it passes single element by element to an function from an data strcutre.
// the rest opeartor is quite opposite to it 
// it passes multiple values to function as a data structure.

// function sumTwo(...args){
//     let sum=0;
//     for (const arg of args){
//         sum = sum+arg;
//     }
//     return sum;
// }


// console.log(sumTwo(2,3));//5
// console.log(sumTwo(1,2,3,4,5));v//15

// the same function can also be written in another way

function sumTwo (a,b , ...args){ // it means when we pass values it ignores 1,2 elements for args

    var mult = a*b;
    let sum=0;
    for (const arg of args){
            sum = sum+arg;
         }
         return [sum,mult];
     
}
console.log(sumTwo(1,2,3,4,5));// output is: [12,2]