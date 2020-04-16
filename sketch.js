
var r = 0;
var g = 50;
var b=255;
var a= 75;
var c= 105;


function setup(){
 createCanvas(1200,400);
}


function draw(){
r= map(mouseX,0,600,0,255);
g= map(mouseX,0,600,50,0);
b= map(mouseX,0,600,255,50);
a= map(mouseY,0,400,75,255);
c= map(mouseY,0,400,255,105);



background(r,g,b);
fill(0,0,0);
ellipse(mouseX,mouseY,64,64);
 
}