let canvas = document.querySelector('canvas');

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

let c = canvas.getContext('2d');


let mouse ={
  x:undefined,
  y:undefined
}
let maxRadius = 50;
//color array
let colorArray = [
    "#0DD97A",
    "#0798F2",
    "#F2E205",
    "#D90718",
    "E8F9FD",
    "59CE8F"

]
//mouse move function
window.addEventListener("mousemove", function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse)
})
//canvas resize function
window.addEventListener('resize', function(){
  canvas.width= window.innerWidth;
  canvas.height= window.innerHeight;
  init
})
//create random multiple circle use object oriented programming
function Circle(x, y, dx, dy, radius){
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;
   this.minRadius = radius;
   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

   this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
   }

   this.update = function(){

    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;

    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x+=this.dx;
    this.y+= this.dy;
    // interactivity of circle
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
      if(this.radius < maxRadius){
        this.radius += 1;
      }
     
    }else if(this.radius > this.minRadius){
      this.radius -= 1;
    }
    this.draw();
    
 
   }

}
let circleArray = [];
for (let i = 0; i < 550; i ++){
let x = Math.random()*innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 4;
let dy = (Math.random() - 0.5) * 4;
let radius = Math.random() * 3 + 1;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArray);



function animate (){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < circleArray.length; i++){
      circleArray[i].update();
    }
}
animate();



// "#0D65D9",
// "#04BFAD",
// "#F2D22E",
// "#D90718",