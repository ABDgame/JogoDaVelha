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
var mainImage = null;
var tempBox = {};

function mousemoved(e)
{
  if(mouseIsDown){ 
     let mouseX = (e.clientX - canvas.offsetleft);
     let mouseY = (e.clientY - canvas.offsetTop);
     
     if(!imageAdded)
     {
         alert("Adicione uma imagem primeiro!!!")
         return;
      }
     if(tempBox && (mouseX > mouseDownPos.x && mouseY > mouseDownPos.y))
     {
      }
     ctx.clearReact(0,0,canvas.width,canvas.height);
     redraw();
     let width = mouseX - mouseDownPos.x;
     let height = mouseY - mouseDownPos.y;
     ctx.strokeStyle = "grey";
     ctx.strokeRect(mouseDownPos.x,mouseDownPos.y,width,height);
     //save temp box params
     tempBox.x = mouseDownPos.x;
     tempBox.y = mouseDownPos.y;
     tempBox.width = width;
     tempBox.height = height;
     
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
     mainImage = img;
  }
}
function redraw()
{
  if(mainImage)
  {
     let height=img.naturalHeight/img.naturalWidth;
     ctx.drawImage(img,0,0,canvas.width,height * canvas.width);
  }
}
