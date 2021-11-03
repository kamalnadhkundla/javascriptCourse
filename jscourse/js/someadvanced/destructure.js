// const name = ["kamal",2,"admin"];
// // var role  = name[2];  // without typing these many ways.
// // var namee = name[0];

// var[name,course,role ] =name;

// console.log(role);

const Myuser ={
    name:"kamal",
    courses:4,
role:"admin"};
console.log(Myuser.courses); // wt if we wanna use these as 50 tyms

const {name,courses,role} =Myuser;
console.log(courses); // we hav to use both sides same names to equal them lhs=rhs
