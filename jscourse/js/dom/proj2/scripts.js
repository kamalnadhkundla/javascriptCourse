const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink= document.querySelector(".pink");

const center = document.querySelector(".center");

console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor=(selectedelement)=>{
    return window.getComputedStyle(selectedelement).backgroundColor;
};

// var orangeElementColor=getBGColor(orange);
// orange.addEventListener('mouseenter',()=>{
//     center.style.background=orangeElementColor;
// });


const magicColor=(element)=>{
     var color = getBGColor(element);
    return element.addEventListener('mouseenter',()=>{
      center.style.background=color;
    });
}

magicColor(red);
magicColor(cyan);
magicColor(violet);
magicColor(orange);
magicColor(pink);