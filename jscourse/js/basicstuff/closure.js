function init(){
    console.log("hii");
    var name = "kamal";
    return function say(){
        console.log(`hello ${name}`);
    };
   
}

var nnn = init();
nnn();

function add(x){
    return function(y){
     return x+y;
    };
}

var add5=add(4);
 var b =add5(5);
 console.log(b);

 // in simple way we can also use two paranthesis when we call the function.
 console.log(add(5)(5)); // this topic is known as curring