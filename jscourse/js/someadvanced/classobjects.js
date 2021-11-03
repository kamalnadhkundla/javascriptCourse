 //import user from "./class"; // this is new way
 const user = require("./class.js"); // most common way

 const kamal = new user("kamal","kamalkundla@gmail.com");

 console.log(kamal.getInfo());
 kamal.enrollcourse("react");
 kamal.enrollcourse("angular");
 kamal.enrollcourse("mongodb");
 console.log(kamal.getcourseList());

 let courses = kamal.getcourseList();
 courses.forEach((c)=>(console.log(c)));

