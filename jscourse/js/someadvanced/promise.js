const { reject } = require("async");

function uno(){
return "i am one";
}

// var dos =async()=>{
//     setTimeout(()=>{
//    return " i am two";
//     },3000); 
   
// }
var dos =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (" i am two");
        },3000);
    });
   
};


function tres(){
    return " i am three"
}

const callMe=async()=>{
    let valone = uno();
    console.log(valone);

    let valtwo = await dos();  // if i run this now where it has a timed out function it may give undefined so it is better to delcare to async key
                             //keyword in the function then gives promise in place of undefined
    console.log(valtwo);

    let valthree= tres();
    console.log(valthree);
}
callMe();
// A promise is an event which might be fullfilled(resolve) or not(reject) but its gonna give some response back.
// for example i am gonna comment out the above function and rewrite it again
