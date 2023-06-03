const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove',mousemoved);
canvas.addEventListener('mousedown',mousedown);
window.addEventListener('mouseup',mouseup);

var mouseIsDown = false;
function mousemoved(e)
{
  if(mouseIsDown)
      console.log("mouse moved");
}

function mousedown(e)
{
  mouseIsDown = true;
   console.log("mouse down");
}

function mouseup(e)
{
  mouseIsDown = false;
   console.log("mouse up");
}
