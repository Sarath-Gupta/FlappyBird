var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  
}

function draw() {
  background(0);
  bird.show();
  bird.update();
  
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
  
  for(var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();
  }
}

function mouseClicked() {
  bird.velocity += bird.lift;
}
