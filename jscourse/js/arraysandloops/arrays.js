var countries =["india","usa","russia","uk","china"]; //normal way

var states= new Array("rajasthan","delhi","andhra pradesh"); //object orientated way

var many = new Array(12);
for(var i =0;i<many.length;i++){
   // many.push(i);
}



//countries.fill("iceland");

//console.log(countries); ///fill method fills every element as iceland
countries.push("iceland");
console.log(many);
console.log(countries);
many.push(0);
for(var i=1;i<12;i++) many.push(i);
console.log(many);
many.unshift(22); // it add 22 in first and shift all other elements to right side
many.shift()   // removes first element and shift rest all to left side


