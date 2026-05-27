let ghostX = 50;
let pacmanX = 200; 
let pacmanY = 200;
let coins = [];

function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255); 
  
  for (let x = 200; x <= 550; x += 50) {
    coins.push({ x: x, eaten: false });
  }
}

function draw() {
  background(0);

  stroke(0, 0, 255);
  strokeWeight(5);
  line(0, 130, 600, 130);
  line(0, 90, 600, 90);
  
  line(0, 270, 140, 270);
  line(140, 270, 140, 400);
  line(0, 310, 100, 310);
  line(100, 310, 100, 400);
  
  line(260, 270, 600, 270);
  line(260, 270, 260, 400);
  line(300, 310, 600, 310);
  line(300, 310, 300, 400);
  
  stroke(255, 255, 0);
  strokeWeight(10);
  point(200, 300); 
  point(200, 350); 
  point(200, 400);

  pacmanX += 2;
  if (pacmanX > width + 150) {
    pacmanX = -50;
    for (let i = 0; i < coins.length; i++) {
      coins[i].eaten = false; 
    }
  }
  
  ghostX = pacmanX - 150;
  let ghostY = 200;

  for (let i = 0; i < coins.length; i++) {
    if (abs(pacmanX - coins[i].x) < 30) {
      coins[i].eaten = true;
    }
    
    if (!coins[i].eaten) {
      stroke(255, 255, 0);
      strokeWeight(10);
      point(coins[i].x, 200);
    }
  }

  noStroke();
  let mouthAngle = map(sin(frameCount * 0.2), -1, 1, 0, 45);
  let pacmanSize = 80 + sin(frameCount * 0.1) * 5;
  
  fill(255, 255, 0);
  arc(pacmanX, pacmanY, pacmanSize, pacmanSize, radians(mouthAngle), radians(360 - mouthAngle));

  let colorProgress = map(sin(millis() * 0.002), -1, 1, 0, 1);
  let colorA = color(255, 0, 0);   
  let colorB = color(0, 150, 255); 
  let ghostColor = lerpColor(colorA, colorB, colorProgress);
  
  fill(ghostColor);
  arc(ghostX, ghostY, 80, 80, radians(180), radians(360));
  rect(ghostX - 40, ghostY, 80, 40);
  
  let legWave = sin(frameCount * 0.3) * 3;
  fill(0);
  arc(ghostX - 26.5, ghostY + 40, 27 + legWave, 27, radians(180), radians(360));
  arc(ghostX,        ghostY + 40, 26 - legWave, 27, radians(180), radians(360));
  arc(ghostX + 26.5, ghostY + 40, 27 + legWave, 27, radians(180), radians(360));
  
  fill(255);
  ellipse(ghostX + 25, ghostY - 10, 20, 30);
  ellipse(ghostX - 5,  ghostY - 10, 20, 30);
  
  let pupilSizeW = 8.5 + sin(frameCount * 0.1) * 1.5;
  fill(0, 0, 255);
  ellipse(ghostX + 28, ghostY - 10, pupilSizeW, 16);
  ellipse(ghostX - 2,  ghostY - 10, pupilSizeW, 16);
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}