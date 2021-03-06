const courses=[
    {
        name : "complete reactjs course",
        price :"2.3"
    },
    {
        name : "complete angular course",
        price :"2.1"
    },
    {
        name : "complete mern course",
        price :"2.7"
    },
    {
        name : "complete python course",
        price :"2.8"
    }
   
];



function generatelist(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course)=>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price= document.createTextNode("$" + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
        

    });
}
generatelist();

//window.addEventListener("load",generatelist);

const button = document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price )
    generatelist();
});
