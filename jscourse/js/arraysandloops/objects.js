// in java or python we create an object by creating a class now in js we do it by var 

var users={
 firname:"kamalnadh",
 lastname :"kundla",       // most of beginers do mistake here by keeping = instead of colon already = is defined up
 age : 19,                 // still why do we use equal to and also do not end a property with semi colon(;) already a flowers braces
 idno : 190030901,             // use a coma(,) to end a property
 branch : "cse",


}; // left side one are keys and right side ones are values toit.

console.table(users); // making all the properties as table and printing in console
console .log(users);  // our normal way 
// accessing a specific one
 console.log(users.firname);
 // there is also another way of accessing like in dictionaries in python 
 console.log(users["firname"]); // why do we used the quotes ? // bcz we consider it is an array as we know the array elements are 
 // some specified datatypes we can not simply keep var datatype in the square braces.


 // lets go into some deep in objects we created arrays and functions in java python right can we create same in js
 // yes ofcourse we can create arrays and functions in js object.
 var users1={
    firname:"kamalnadh",
    lastname :"kundla",       
    age : 19,                 
    idno : 190030901,           
    branch : "cse",
    courses:[],
    buycourse: function(coursename){
         this.courses.push(coursename);
    },
    getnoofcourse:function(){
      //    return this.courses.length; old way
      return `${this.firname} enrolled in ${this.courses.length}`;
    }
   
   
   };

   users1.buycourse("java script");
   users1.buycourse("html");
   users1.buycourse("css");

   console.log(users1.getnoofcourse());