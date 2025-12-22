let bubbles = [];
let position;
let velocity;

function setup() {
  createCanvas(1000, 500);

  for (let i =0; i<12; i++){
  let bubble_size = random(0,200);
  let x = random(0,350);
  let y = random(250,400);
  let vx;
  let vy;
  let bubble = {
   x: x,
   y: y,
   bubble_size: bubble_size,
   vx: 100/bubble_size,  
   vy: bubble_size * 0, //change later for mouse hovering for now its 0
   r: random(0, 255),
   g: random(0,255),
   b: random(0,255) };
   
   bubbles.push(bubble); 
   console.log(bubble.vx, bubble.vy);  // What do you think this will show?
           
  }
                }



  function draw(){
    background(200); //allows us to draw then erase screen each frame due to draw calling itself 60 frames a second
    
    for (let i =0; i < bubbles.length; i++){

    //applying forces
    bubbles[i].x += bubbles[i].vx;
    bubbles[i].y += bubbles[i].vy;
    //update bubble position based on forces applied
    fill (bubbles[i].r,bubbles[i].g, bubbles[i].b);
    circle(bubbles[i].x, bubbles[i].y, bubbles[i].bubble_size);
    }


                  }
 
                  // mouseMoved(){
//track mouse movement in realtion to bubble positon decide wether its on top or bottom then apply force 
//respecitvely
  //}

