// Your code goes here

//mouseover event listener

let navMouseover = document.querySelector(".nav");
navMouseover.addEventListener('mouseover', (event)=>{
    event.target.style.backgroundColor = 'transparent';
    event.target.style.color = 'brown';
});

//log keyboard events

document.addEventListener('keydown', (event)=>{
    console.log(event);
});

// Zoom on Mousewheel Event.  Copied from Mozilla developer network
function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  el.onwheel = zoom;
  