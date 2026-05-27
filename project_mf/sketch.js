let fingerX = 240.2;      //지문 좌표
let fingerY = 177;
let lfingerX = 160.8;      //왼쪽지문 좌표
let lfingerY = 177;
let numLayers = 8;      // 지문 층수
let maxRadius = 35;     // 전체 크기
let angry = 0
let bread = 0
let cloud = 0
let direction = 1
function setup() {
  createCanvas(400, 600);
 background(150);
  noStroke()
  fill(210, 180, 140)
  rect(150,280, 100,40) //목1
  fill(245, 203, 167)
  rect(125,100,150,200) // 얼굴형태 
  fill(107, 142, 35)
  triangle(150,320, 0,380, 150,380)
  triangle(250,320, 400,380, 250,380)
  rect(0,380, 400,300)
  rect(150,320, 100,80)  
  fill(150)
  triangle(125,250, 125, 300, 165, 300 )
  triangle(275,250, 275, 300, 235, 300 )//턱  
  fill(210, 180, 140)
  triangle(150,280, 150, 300, 165,300 )
  triangle(250,280, 250, 300, 235,300 )
  arc(200,320, 100, 50, 0,PI)//목2 
  stroke(50)
  strokeWeight(2)
  fill(210, 180, 140)
  triangle(200,217, 218,211, 200,177)//코
  let eyeRx = constrain(235,227,243)
  let eyeRy = 174
  let eyeLx = constrain(165,157,173)
  let eyeLy = 174
  let eyeSize = 16
  noStroke()
  fill(255)
  arc(165, 175, 40, 20, radians(180),radians(360) )
    arc(235, 175, 40, 20, radians(180),radians(360) )
    arc(165, 175, 40, 15, radians(0),radians(180) )
    arc(235, 175, 40, 15, radians(0),radians(180) )
  fill(0)
  ellipse(eyeLx,eyeLy,eyeSize,eyeSize)
  ellipse(eyeRx,eyeRy,eyeSize,eyeSize)//눈 
  fill(210, 180, 140)
  arc(125,175,20,60, radians(90),radians(270))
  arc(275,175,20,60, radians(270),radians(450)) //귀 
  fill(0)
  triangle(123,175, 123,100, 150,100)
  triangle(277,175, 277,100, 250,100)
  arc(123,137.5, 10,75,
      radians(90),radians(270))
    arc(277,137.5, 10,75,
      radians(270),radians(450))
  arc(200,100, 154, 40,
      radians(180),radians(360))
    arc(200,100, 154, 50,
      radians(0),radians(180)) // 머리카락 
  noFill()
  stroke(0)
  strokeWeight(2.4)
  ellipse(165.8,177, 55,40)
  ellipse(234.2,177, 55,40)
  line(138.3,177, 123,163)
  line(261.7,177, 277,163)
  strokeWeight(3)
  line(193.3,176, 206.7,176) // 안경
}
function draw(){

  fill(0)
  noStroke()
  arc(165, 150, 50, 10, radians(180),radians(360))
  arc(235, 150, 50, 10, radians(180),radians(360))//눈썹
  stroke(0)
  strokeWeight(2)
  line(180,252,190,255)
  line(190,255,200,254)
  line(220,252,210,255)
  line(210,255,200,254) //입술  
  if (angry>4){
    fill(245, 203, 167)
    noStroke()
rect(180,240,40,30)
rect(140,140,120,10)
   stroke(0);
  fill(255);
  arc(200,260,80,30,radians(180),radians(360))
    line(160,260,240,260)
  line(180,260, 180,246.8)
  line(220,260, 220,246.8)
  line(190,260, 190,245)
  line(210,260, 210,245)
  line(200,260, 200,245)
  strokeWeight(5)
  line(185,150, 140,140)
  line(215,150, 260,140)
    
cloud += direction;
if (cloud >= 30) {
    direction = -1;
  } else if (cloud <= 0) {
    direction = 1;
  }
 fill(150)
  noStroke();  
  rect(0,0,110,130)  
  fill(255);
  ellipse(57 - cloud, 77 - cloud, 50, 50);
  ellipse(53 - cloud, 100 - cloud, 35, 35);
  ellipse(80 - cloud, 73 - cloud, 35, 35);
  triangle(53 - cloud, 100 - cloud, 80 - cloud, 73 - cloud, 110 - cloud, 130 - cloud);
  fill(150)
  noStroke();  
  rect(290,0,110,130)  
  fill(255);
  ellipse(343 + cloud, 77 - cloud, 50, 50);
  ellipse(347 + cloud, 100 - cloud, 35, 35);
  ellipse(320 + cloud, 73 - cloud, 35, 35);
  triangle(347 + cloud, 100 - cloud, 320 + cloud, 73 - cloud, 290 + cloud, 130 - cloud);
}
}
function mousePressed() {  
  if (204.2<mouseX && mouseX<264.2 && 152<mouseY && mouseY<202){ 
  noFill();
  stroke(180,150);
  strokeWeight(1.2);
  let toRad = PI / 180;
  for (let i = 1; i <= numLayers; i++) {
    let r = map(i, 1, numLayers, 8, maxRadius);
    let w = r * 0.65;
    let h = r;
    let fixedRotation = i * 50; 
    arc(fingerX, fingerY, w, h, (fixedRotation + 0) * toRad, (fixedRotation + 80) * toRad);
    arc(fingerX, fingerY, w, h, (fixedRotation + 120) * toRad, (fixedRotation + 200) * toRad);
    arc(fingerX, fingerY, w, h, (fixedRotation + 240) * toRad, (fixedRotation + 320) * toRad);
  }
    fingerX = random(220,240)
    angry = angry+1
  } 
  else if (135.8<mouseX && mouseX<195.8 && 152<mouseY && mouseY<202)
  {
  noFill();
  stroke(180,150);
  strokeWeight(1.2);   
  let toRad = PI / 180;
  for (let i = 1; i <= numLayers; i++) {
    let r = map(i, 1, numLayers, 8, maxRadius);
    let w = r * 0.65;
    let h = r;
    let fixedRotation = i * 50; 
    arc(lfingerX, lfingerY, w, h, (fixedRotation + 0) * toRad, (fixedRotation + 80) * toRad);
    arc(lfingerX, lfingerY, w, h, (fixedRotation + 120) * toRad, (fixedRotation + 200) * toRad);
    arc(lfingerX, lfingerY, w, h, (fixedRotation + 240) * toRad, (fixedRotation + 320) * toRad);
  }
  lfingerX = random(160,180)
  angry = angry+1
  }
else if (180<mouseX && mouseX<220 && 220<mouseY && mouseY<240)
  {
 if (bread == 0){
  noFill();
  stroke(165, 42, 42);
  strokeWeight(3);
  line(180,225, 170,240)
  line(170,225, 165,240)
  line(195,225, 180,240)
  line(200,225, 190,240)
  line(225,225, 230,240)
  line(210,225, 220,240)
  line(205,225, 210,240)
  line(230,225, 240,240)
  angry = angry+1
  bread = 1
  }}
}
function keyPressed() {
  if (key === 'q'){
noStroke()
fill(random(255),random(255),random(255))
ellipse(random(40,360),random(400,560),random(10,40),random(10,40))
angry = angry+1
  }
    if (key === 's') {
    saveGif('mySketch', 10);
  }
}