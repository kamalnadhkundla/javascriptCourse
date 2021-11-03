var user = function(firstname,coursecount){
    this.firstname=firstname;
    this.coursecount=coursecount;
    this.getcoursecount = function(){
    console.log(`course count is ${this.coursecount}`);
    };
    
};

var kamal = new user("kamal",2);
var mahesh = new user("mahesh",1);
console.log(kamal);
console.log(mahesh);
kamal.getcoursecount();
//user("rabbit",12);
//user.getcoursecount(); //these wont work out because we turned a function into a object by this keyword.
user.prototype.getfirstname = function (){
    console.log(this.firstname);
};

kamal.getfirstname(); 
// prototype means we know what it is in our own way its like a object it is used when we wanna inject things to an existing object.

