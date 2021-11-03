// lets see for each loop
const mystates=[
    "rajasthan",
     "delhi",
     "assam",
     "tamilnadu",
     1984,
     "maharastra"
];

// for each loop is not actually loop it is a like a method  for arrays but still considered as loop in js.
// for each loop is syntax is completely different from java and javascript lets see it
// mystates.forEach((s)=>(console.log(s)));
// mystates.forEach((s)=>{if(typeof s==="string")console.log(s)});
// mystates.forEach(function(s){
//     if(typeof s!=="string")console.log(s)
// });

// these are the ways of writing for each syntax 
// there are two other loops introduced in java script
// 1. for in 2. for of
// for of will be mostly used in arrays where for in will be used in mostly objects.

const names = ["youtube","america","canada","brazil","russia"]

// for of
for(const n of names){
    console.log(n);
}

const namess={
  yt:"youtube",
  am:"america",
  cn:"canada",
  br:"brazil",
  ru:"russia"
}

for(const n in namess){
    console.log(`keys is ${n} and the values is ${namess[n]}`);
}