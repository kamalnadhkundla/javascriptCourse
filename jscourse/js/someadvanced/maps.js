// not about those maps in looping concept
// it is like a data structure 

var myMap= new Map();
myMap.set(0,"kamal");
myMap.set(1,"ritesh");
myMap.set(2,"tarak");
myMap.set(3,"mukesh");

console.log(myMap);
console.log(myMap.size);
console.log(myMap.values());

// for(let key of myMap.keys()){
//     console.log(key+ " " + myMap.values(key)); // this will not work out we can not access a value based on key in java script
// }

for (let [key,value] of myMap){
 console.log(` key is ${key} and the value is ${value}`);
}
// it has access to for each aslo
myMap.forEach((key,value)=>(console.log(`value is ${value} and the key is ${key}`)));

 for(let key of myMap.keys()){
     console.log(myMap.get(key));  // this is the way we can print the values based on the index.

 }

 // we can also delte the
 myMap.delete(0); // kamal will be deleted.