var canvas;
var backgroundImage, Runner1_img, Runner2_img, track;
var EnergyImage, powerCoinImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player,playerCount;
var allPlayers, Runner1, Runner2, Energy, powerCoins, obstacles;
var Runners = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  Runner1_img = loadImage("../assets/car1.png");
  Runner2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  EnergyImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  blast = loadImage("./assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
