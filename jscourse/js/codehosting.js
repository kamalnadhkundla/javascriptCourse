// ok lets talk about the context as we talked in global context we know that everything will be saved before the execution by the 
//global context in the context rules lets see the some important rules
// rule no 1: functions declaration are scanned , collected and made available when ever we wanna use them
// rule no 2: varaibles declaration are scaneed , collected but made undefined 
// lets see a example

tip(4);

function tip(a){
    var x =parseInt(a);
    console.log("tip :" +(x+5));
}

// we used the global context it is fine actually it runs and executes fine as it undergoes rule  no 1.

// see this example

bigtip(15);

var bigtip=function (a){
    console.log("big tip" +parseInt(a)+15);
}

// it gives an error because it undergoes rule no 2 as it variable.
// to make it easier and avoid the confusion lets see an example 

var myname ="kamal";
console.log(myname);   // it works fine

console.log(name);
var name = "kamalnadh"; // it says undefiend as it undergoes the rule no 2 of the context concept in the javascript.