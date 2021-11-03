// filter method in arrays topic may be available in most of the programming languages
// this filter method filter the values in the array under a condition and make available those values in the new array.
//example
// can use both normal function and arrow functions.
function isodd(ele){
    return ele%2!==0;
}

var myres=[1,2,3,4,5,6,7,8,9,10]
var res =myres.filter((e)=>e%2==0);
console.log(res);
var res1=myres.filter(isodd)
console.log(res1);

// do you know about slice method in java script
// its same like a substring in string concept have a look
var users=["kamal","swaminathan","maheshan","selvan","giridhara"];
console.log(users.slice(1,4));

// ok it is enough to know about slice there is a similar method to it called as splice
// what can it do ? ok the splice()--> constructor allows you minimum 1 argument
// the first parameter is known as starting point if we provide another parameter it is fine else it starts from 1 and removes every 
// element after 1 . if we provide a second parameter the will be known as not an end point but it will count how many elements
// that are about to remove and if we provide a third parameter it will add the 3 rd parameter in the array we can provide as many we want
// example
var exe1=[1,2,3,4,5];
exe1.splice(1,3,22);
console.log(exe1); //output will be lyk [1,22,5]