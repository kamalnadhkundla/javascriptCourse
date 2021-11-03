//basic stuff
function name (parameter){

    console.log(parameter);

}

name("kamal");

// lets return something

function returnexample(parameter){
    return "name : "+parameter;

}

var myname = returnexample("kamalnadhkundla");
console.log(myname);
// another way of doing it like
console.log(returnexample("kamalnadhkundla"));

// intemeditate level

function getuserrole(name,role){
    switch(role){
        case "admin":
           // return name+" you have acces to everything"; old way lets use interpolation
           return `${name} you have access to everything`;
            break; // this is not neccessary when return is used bcz rest of code dont work out once returned
         case "subadmin":
            // return name+"   you can only create or delete in it";
             return `${name} you can only create or delete`
             break;
          case "testprep":
              //return name+" you can simply watch it";
              return `${name} you can only watch the content`;
              break;
              
           default:
             //  return "non of the users assigned";
             return `${name} sorry, but non of the users assigned`;
               break;   
    }
}

// lets make the above function as function in variable it means u assign a function to varible and making it as a function 
 var getuserjob=function (name,role){
    switch(role){
        case "admin":
           // return name+" you have acces to everything"; old way lets use interpolation
           return `${name} you have access to everything`;
            break; // this is not neccessary when return is used bcz rest of code dont work out once returned
         case "subadmin":
            // return name+"   you can only create or delete in it";
             return `${name} you can only create or delete`
             break;
          case "testprep":
              //return name+" you can simply watch it";
              return `${name} you can only watch the content`;
              break;
              
           default:
             //  return "non of the users assigned";
             return `${name} sorry, but non of the users assigned`;
               break;   
    }
};
// check the codehosting.js  for some more information


console.log(getuserjob("kamal","admin"));








