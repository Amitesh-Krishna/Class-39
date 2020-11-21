var canvas, backgroundImage;
var car1,car2,car3,car4;
var car1I,car2I,car3I,car4I,track,ground;
var cars;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
    ground = loadImage("images/ground.png");
    track = loadImage("images/track.jpg");
    car1I = loadImage("images/car1.png");
    car2I = loadImage("images/car2.png");
    car3I = loadImage("images/car3.png");
    car4I = loadImage("images/car4.png");
}

function setup(){
    canvas = createCanvas(displayWidth-100,displayHeight-100);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    //background(ground);
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}
