function setup() {
  createCanvas(600, 400);
   background(0);
  
   fill(255,255,0)
  noStroke()
  arc(200,200,80,80,radians(30),radians(330))
 //팩맨
  
  
  fill(255,0,0)
  arc(50,200,80,80,radians(180),radians(360))
  rect(10,200,80,40)
  //고스트몸체
  fill(0)
  arc(23.5,240,27,27,radians(180),radians(360) )
  arc(50.5,240,26,27,radians(180),radians(360) )
  arc(76.5,240,27,27,radians(180),radians(360) )
  //고스트다리
  
  fill(255)
  ellipse(75,190,20,30)
  ellipse(45,190,20,30)
  //흰자
  
  fill(0,0,255)
  ellipse(78,190,8.5,16)
  ellipse(48,190,8.5,16)
  //눈동자
}

function draw() {
  stroke(0,0,255)
  strokeWeight(5)
  line(0,130,600,130);
  line(0,90,600,90);
  
  
  line(0,270,140,270);
  line(140,270,140,400);
  line(0,310,100,310);
  line(100,310,100,400);
  
  
  
  line(260,270,600,270);
  line(260,270,260,400);
  line(300,310,600,310);
  line(300,310,300,400);
  //배경선
  
  stroke(255,255,0)
  strokeWeight(10)
  point(200,300);
  point(200,350);
  point(200,400);
  point(300,200);
  point(400,200);
  point(500,200);
  point(600,200);
  point(350,200);
  point(450,200);
  point(550,200);
  point(600,200);
  //점
}