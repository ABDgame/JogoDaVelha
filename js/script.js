const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

const cropped_images_div = document.querySelector(".cropped-images");

canvas.addEventListener('mousemove',mousemoved);
canvas.addEventListener('mousedown',mousedown);
window.addEventListener('mouseup',mouseup);

var mouseIsDown = false;
 
function mousemoved(e)
{
  if(mouseIsDown)
     cropped_images_div.inn("mouse moved");
}

function mousedown(e)
{
  mouseIsDown = true;  
}

function mouseup(e)
{
  mouseIsDown = false;
}
