//Animations
var quote;
var flowey;
var glitch;
var sans;
var ballos;
var fawful;
//Animations
//Animation images
var quote0;
var quote1;
var quote3;
var quote4;
var quote5;
var quote7;

var sans0;
var sans1;
var sans2;
var sans3;

var fawful0;
var fawful1;
var fawful2;
var fawful3;
var fawful4;
var fawful5;
var fawful6;
var fawful7;
//Animation images
var playersDown = 0;//Finds the amount of players not in the match
var winner = 0;//Who won the last match
var trans = {x: 0, y: 0, scale: 1, count: 0};
var playerNum = 1;
var keySelect = [false,0];
var menu = 3;//0: main menu, 1: settings, 2: character select, 3: intro, 4: actual battle
var arena = new Arena("Classic");//what arena you are in
var keys = [];
var fire = [];

var title;//images
var quotePic;
var floweyPic;
var glitchPic;
var sansPic;
var balosPic;
var fawfulPic;//images

var ai = new AI();
var slideX = [0,0];
var slideY = [0,0];
var loading = 0;
var picCount = 0;
var pause = false;
var choose = {
  place: true,
  one: {
    x: 120,
    y: 380
  },
  two: {
    x: 340,
    y: 380
  },
  three: {
    x: 560,
    y: 380
  },
  four: {
    x: 780,
    y: 380
  }
}
var controls = [
	new Controls(38, 37, 40, 39, 190, 188, 77, 32),
	new Controls(87, 65, 83, 68, 70, 71, 72, 32),
	new Controls(254, 254, 254, 254, 254, 254, 254, 254),
	new Controls(254, 254, 254, 254, 254, 254, 254, 254),
];
var cpuControls = [
	new Controls(false, false, false, false, false, false, false, false),
	new Controls(false, false, false, false, false, false, false, false),
	new Controls(false, false, false, false, false, false, false, false),
	new Controls(false, false, false, false, false, false, false, false)
];
function keyButton(x,y,inp){
  fill(70,70,70);//one button
  rect(x,y,100,100,10);
  fill(0,0,0);
  rect(x + 10,y + 10,80,80,10);//one button
  fill(255,255,255);
  textSize(18);
  text(keyCodes[inp],x + 50,y + 50);
}
function backButton(){
  textSize(45);
  fill(255,90,90);
  rect(800,0,100,100);
  fill(0,0,0);
  text("Back",850,50);
  if(mouseX > 800 && mouseY < 100 && mouseIsPressed){
    menu = 0;
    fire = [];
  }
}
var attack = [
  {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    time: 0,
    player: 0,
    damage: 0,
    launch: 0
  }
];
var player = [
	new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
	new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
	new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
	new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined))
];
