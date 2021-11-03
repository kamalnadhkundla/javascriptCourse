const kamal ={
    firstname : "kamal",
    lname : "chowdary",
    role:"admin",
    coursecount : 3,
    getinfo : function(){
        console.log(`
        first name is ${this.firstname}
        last name is ${this.lname}
        his role is ${this.role}
        and the course count is ${this.coursecount}
        `);
    },
};

const sai ={
    firstname :"sai kumar",
    lname :"chowdary",
    role:"subadmin",
    coursecount :4,
};

// kamal.getinfo();
// sai.getinfo(); // it gives the error because we did not define get info method in sai object
// // lets bind that

// kamal.getinfo.bind(sai)(); // now we binded the method .
// it is not automated installed to sai object we have to give a reference
var saidetails =kamal.getinfo.bind(sai); // in above one we used parenthsis after(sai) that means we called the function here we refered
saidetails();

// we also have an other method called as call to call upon a method
kamal.getinfo.call(sai);
kamal.getinfo();
