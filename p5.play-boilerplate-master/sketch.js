
var database;
//var playerName, playerIndex;
var player;
var form;
var playerCount = 0;
var gameState = 0;
var player_1, player_2;
//var players = [player_1, player_2];
var game;
var allPlayers;
var player_1_img, player_2_img;
var hurdle1, hurdle2, hurdleImg;

function preload()
{
  player_1_img = loadImage("Animation/images (1).png");
  player_2_img = loadImage("Animation/images (1).png");
  hurdleImg = loadImage("Animation/images.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //form = new Form();
  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  //background(255);  
  //form.display()
  //console.log(player.index);

  if(playerCount === 2)
  {
    game.update(1);
  }
  
  if(gameState === 1)
  {
    clear();
    game.play();
  }
}