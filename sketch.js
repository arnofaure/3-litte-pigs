//  KADENZE - P5JS - Assignment 5 - Arno Faure

var pigA, pigB, pigC, wolf, great;
var straw, wood, brick;
var sizePig = 200;
var sizeWolf = 300;
var objectH;

var state = "start";
var typed = "";

var fiferStory = false;
var fiddlerStory = false;
var practicalStory = false;

var restart = false;

var descriptionText = 18;

var input, button, action;

function preload() {
  pigA = loadImage("assets/pigA.png");
  pigB = loadImage("assets/pigB.png");
  pigC = loadImage("assets/pigC.png");
  wolf = loadImage("assets/wolf.png");
  straw = loadImage("assets/Objects-straw.png");
  wood = loadImage("assets/Objects-wood.png");
  brick = loadImage("assets/Objects-bricks.png");
  great = loadGif("assets/great.gif");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  imageMode(CENTER);
  objectH = straw.width / straw.height;
  input = createInput(['Type here + ENTER']);
  input.class("action-style");
}

function draw() {
  input.position(width *.78, height * .85);
  background(255);
  textFont("Helvetica");
  textStyle(NORMAL);
  textSize(descriptionText);

  if (state === "start") {
    fill('#F0C42C');
    ellipse(width - 125, 125, 125, 125);

    for (var i = 0; i <= width+200; i += 400) {
      noStroke();
      fill('#BDE08A');
      ellipse(i, height, 525, 525);
    }
    for (var j = 0; j <= width+50; j += 100) {
      fill(78, 185, 111, 125);
      ellipse(j, height, 200, 200);
    }
    fill(0);
    text("Type the name of the pig you want to follow", width / 2, height * .25);
    image(pigA, width * .33, height / 2, sizePig, sizePig);
    image(pigB, width * .5, height / 2, sizePig, sizePig);
    image(pigC, width * .66, height / 2, sizePig, sizePig);
    textStyle(BOLD);
    text("fifer", width * .33, height / 2 + sizePig / 1.5);
    text("fiddler", width / 2, height / 2 + sizePig / 1.5);
    text("practical", width * .66, height / 2 + sizePig / 1.5);
  }

  //1A-THE FIFER STORY
  else if (state === "fiferPath") {
    background('#1DAFEC');
    textSize(descriptionText);
    textStyle(NORMAL);
    text("Fifer built himself a house of straw*, but the wolf is coming...", width / 2, height * .25);
    image(straw, width * .5, height * .32, sizePig, sizePig / objectH);
    image(pigA, width * .5, height / 2, sizePig * .9, sizePig * .9);
    textSize(15);
    text("Will you stay here or run to your brother's?", width / 2, height / 2 + sizePig / 1.5);
    textSize(12);
    textStyle(BOLD);
    text("Type: 'stay' or 'run'", width / 2, height / 2 + sizePig / 1.2);
    textStyle(NORMAL);
    text("*yes, this is very funny!", width / 2, height * .90);
  }

  //1B-FIFER RUNS TO FIDDLER
  else if (state === "run-to-fiddler") {
    background('#1DAFEC');
    textSize(descriptionText);
    text("So Fifer ran to Fiddler's, but the wolf is still coming...", width / 2, height * .25);
    image(wood, width * .5, height * .32, 300, 300 / objectH);
    image(pigA, width * .43, height / 2, sizePig * .9, sizePig * .9);
    image(pigB, width * .57, height / 2, sizePig * .9, sizePig * .9);
    text("Will you both stay here or run to your brother's?", width / 2, height / 2 + sizePig / 1.5);
    textSize(12);
    textStyle(BOLD);
    text("Type: 'stay' or 'run to practical'", width / 2, height / 2 + sizePig / 1.2);
  }

  //1C-BOTH RUN TO PRACTICAL
  else if (state === "both-run-to-practical") {
    background('#1DAFEC');
    image(brick, width * .5, height * .32, 400, 400 / objectH);
    image(pigA, width * .33, height / 2, sizePig * .9, sizePig * .9);
    image(pigB, width * .50, height / 2, sizePig * .9, sizePig * .9);
    image(pigC, width * .66, height / 2, sizePig * .9, sizePig * .9);
    image(great, width * .5, height * .22, 200, 200);
    textSize(12);
    textStyle(BOLD);
    textSize(15);
    text("Type 'restart' to go back to the beginning", width / 2, height / 2 + sizePig / 1.5);
  }

  //2A-THE FIDDLER STORY
  else if (state === "fiddlerPath") {
    background('#E9168C');
    textSize(descriptionText);
    textStyle(NORMAL);
    text("Fiddler built himself a house made of wood, but the wolf is coming...", width / 2, height * .25);
    image(wood, width * .5, height * .32, 300, 300 / objectH);
    image(pigB, width * .5, height / 2, sizePig * .9, sizePig * .9);
    textSize(15);
    text("Will you stay here or run to your brother's?", width / 2, height / 2 + sizePig / 1.5);
    textSize(12);
    textStyle(BOLD);
    text("Type: 'stay' or 'run'", width / 2, height / 2 + sizePig / 1.2);
  }

  //2B-FIDDLER RUN TO PRACTICAL
  else if (state === "fiddler-run-to-practical") {
    background('#E9168C');
    image(brick, width * .5, height * .32, 400, 400 / objectH);
    image(pigB, width * .43, height / 2, sizePig * .9, sizePig * .9);
    image(pigC, width * .57, height / 2, sizePig * .9, sizePig * .9);
    image(great, width * .5, height * .22, 200, 200);
    textSize(12);
    textStyle(BOLD);
    textSize(15);
    text("Type 'restart' to go back to the beginning", width / 2, height / 2 + sizePig / 1.5);
  }

  //3-THE PRACTICAL STORY
  else if (state === "practicalPath") {
    background('#FEF035');
    image(brick, width * .5, height * .32, 400, 400 / objectH);
    image(pigC, width * .5, height / 2, sizePig * .9, sizePig * .9);
    image(great, width * .5, height * .22, 200, 200);
    textSize(12);
    textStyle(BOLD);
    textSize(15);
    text("You are the most clever! Type 'restart' to go back to the beginning", width / 2, height / 2 + sizePig / 1.5);
  }

  //THE WOLF
  else if (state === "the-wolf") {
    background('#FF5454');
    fill(0, 0);
    strokeWeight(10);
    stroke(0);
    rect(0, 0, width, height);
    noStroke();
    for (var k = 0; k <= width; k += 75) {

      fill(0);
      triangle(k - 100, height, 50 + k, height - 100, 150 + k, height);
    }

    textSize(descriptionText);
    text("Too bad! The wolf had a feast. :(", width / 2, height * .25);
    image(wolf, width * .5, height * .45, sizeWolf, sizeWolf);
    textSize(15);
    textStyle(BOLD);
    text("Type 'restart' to go back to the beginning", width / 2, height / 2 + sizePig / 1.5);
  }

  action = input.value();
  actionStory();

  textStyle(NORMAL);
  textSize(40);
  textFont("Pacifico");
  text("The Three  Little Pigs", width / 2, height * .10);
}


function actionStory() {
  if (keyCode === RETURN) {
    if (action === "fifer") {
      state = 'fiferPath';
      input.value('');
      fiferStory = true;
    } else if (action === "fiddler") {
      state = 'fiddlerPath';
      input.value('');
      fiddlerStory = true;
    } else if (action === "practical") {
      state = 'practicalPath';
      input.value('');
      practicalStory = true;
      restart = true;

    }

    if (fiferStory) {
      if (action === 'stay') {
        state = "the-wolf";
        input.value('');
        restart = true;
      } else if (action === 'run') {
        state = "run-to-fiddler";
        input.value('');
      }
      if (action === 'run to practical') {
        state = "both-run-to-practical";
        input.value('');
        restart = true;
      }
    }

    if (fiddlerStory) {
      if (action === 'stay') {
        state = "the-wolf";
        input.value('');
        restart = true;
      } else if (action === 'run') {
        state = "fiddler-run-to-practical"
        input.value('');
        restart = true;
      }
    }

    if (restart) {
      if (action === 'restart') {
        state = "start";
        input.value('');
        fiferStory = false;
        fiddlerStory = false;
        practicalStory = false;
        restart = false;
      }
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
