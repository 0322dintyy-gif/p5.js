let fingerX = -100;      //지문 좌표
let fingerY = -100;
let lfingerX = -100;      //왼쪽지문 좌표
let lfingerY = -100;


let numLayers = 8;      // 지문 층수
let maxRadius = 35;     // 전체 크기

let eyebrowAngle = 180
let eyebrowAngle2 = 180



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
  ellipse(eyeRx,eyeRy,eyeSize,eyeSize)
  //눈
  
  

  
  

  
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
  if (mouseIsPressed){
    eyebrowAngle = 200
  }
  arc(165, 150, 50, 10, radians(eyebrowAngle),radians(eyebrowAngle2+180))
  arc(235, 150, 50, 10, radians(eyebrowAngle),radians(eyebrowAngle2+180))
  //눈썹
  
  stroke(0)
  strokeWeight(2)
  line(180,252,190,255)
  line(190,255,200,254)
  line(220,252,210,255)
  line(210,255,200,254) //입술
}

function mousePressed() {
  
  if (204.2<mouseX && mouseX<264.2 && 152<mouseY && mouseY<202){
 
  noFill();
  stroke(180);
  strokeWeight(1.2);


  let toRad = PI / 180;

  for (let i = 1; i <= numLayers; i++) {
    let r = map(i, 1, numLayers, 8, maxRadius);
    let w = r * 0.65;
    let h = r;

    let fixedRotation = i * 50; 

    // 모든 각도 수치에 toRad를 곱하여 라디안으로 전달합니다.
    arc(fingerX, fingerY, w, h, (fixedRotation + 0) * toRad, (fixedRotation + 80) * toRad);
    arc(fingerX, fingerY, w, h, (fixedRotation + 120) * toRad, (fixedRotation + 200) * toRad);
    arc(fingerX, fingerY, w, h, (fixedRotation + 240) * toRad, (fixedRotation + 320) * toRad);
  }

  }
  
  else if (135.8<mouseX && mouseX<195.8 && 152<mouseY && mouseY<202)
  {
 
  noFill();
  stroke(180);
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

  }

}



 

  