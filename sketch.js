var bird;
var pipes = [];
var score = 0;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.show();
  textSize(32);
  fill(255);
  text(score, width/2, 50);
  bird.update();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    } 
    else if (pipes[i].offscreen() && !pipes[i].scored && !pipes[i].highlight)     {
      score++;
      pipes[i].scored = true;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
}

function mouseClicked() {
  bird.velocity += bird.lift;
}
