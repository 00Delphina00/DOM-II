// Your code goes here

//mouseover event listener

let navMouseover = document.querySelector(".nav");
navMouseover.addEventListener('mouseover', (event)=>{
    event.target.style.backgroundColor = 'transparent';
    event.target.style.color = 'brown';
});