class user {
   
    constructor(name,email){
        this.name = name;
        this.email=email;
    }
    courseList =[];
    getInfo(){
       // let str = this.name+" "+this.email;
        return {name : this.name, email : this.email}; // it returns as object
      // return str;
    }
    enrollcourse(name){
        this.courseList.push(name);
        }
        getcourseList(){
            return this.courseList;
        }
        login(){
            return " you are logged in"
        }
}
class subadmin extends user{
    constructor(name,email){
       super(name,email);
    }
  getAdmininfo(){
      return " i am subadmin";
  }
}

//let kamal = user("kamal","kamalkundla@gmail.com"); // but i wanna use this class in another file so lets comment this line here
module.exports =user;

 const rock = new user("rock","rock@gmail.com");
 console.log(rock.getInfo());
 rock.enrollcourse("angular");
 console.log(rock.getcourseList());
 console.log(rock.courseList); // in the present world secruity should be provide we cant directly access those properties
 // to make it private we have to use # before the variable
 // modification to above user class
//  class user {
   
//     constructor(name,email){
//         this.name = name;
//         this.email=email;
//     }
//     #courseList =[];
//     getInfo(){
//        // let str = this.name+" "+this.email;
//         return {name : this.name, email : this.email}; // it returns as object
//       // return str;
//     }
//     enrollcourse(name){
//         this.#courseList.push(name);
//         }
//         getcourseList(){
//             return this.#courseList;
//         }
// }

//console.log(rock.courseList);  now it gives undefined 
const tom = new subadmin("tom","tom@gmail.com");
console.log(tom.getcourseList());
console.log(tom.getAdmininfo());
console.log(tom.login()); //  this a concept of inheritance
console.log(tom.getInfo());