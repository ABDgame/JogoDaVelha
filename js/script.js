const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


const cropped_images_div = document.querySelector(".cropped-images");

canvas.addEventListener('mousemove',mousemoved);
canvas.addEventListener('mousedown',mousedown);
window.addEventListener('mouseup',mouseup);

var mouseIsDown = false;
var imageAdded = false;
var mouseDownPos = {x:0,y:0};

function mousemoved(e)
{
  if(mouseIsDown){  
     //cropped_images_div.innerHTML = 'x:${e.clientX - canvas.offsetLeft} y:${e.clientY - canvas.offsetTop}';
     let width = e.clientX - canvas.offsetleft;
     let width = e.clientY - canvas.offsetTop;
     ctx.fillRect(mouseDownPos.x,mouseDownPos.y,width,height);
  }
}

function mousedown(e)
{
  mouseIsDown = true;  
  mouseDownPos = {
   x:e.clientX - canvas.offsetLef,
   y:e.clientY - canvas.offsetTo
  };
}

function mouseup(e)
{
  mouseIsDown = false;
}

function addImage(file)
{
  let img = new Image();
  img.src = URL.createObjectURL(file);
  
  img.onload = function()
  {
     imageAdded = true;
     let height = img.naturalHeigth / img.naturalWidth;
     ctx.drawImage(img,0,0, canvas.width, height * canvas.width);
  }
}
