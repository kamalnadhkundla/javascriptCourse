//console.log(name);
var name ="kamal"; //undefined

if(true){
    var lastname ="chowdary";
    console.log(lastname);// it prints fine
}
console.log(lastname); // it also prints same above mentioned 
// the problem is variable inside the scope should not be accessiable 
// to the outer block
// let will be useful in those scenarios
// using let will be solution to above case