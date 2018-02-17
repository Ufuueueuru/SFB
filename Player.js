function Player(x, y, cpu, damage, xVel, yVel, look, dir, attacking, inv, lives, alive, airSpecial, character) {
	this.x = x;//x value
  this.y = y;//y value
	this.shield = false;//If your shield is out
	this.ground = false;
	this.shieldNum = 200;//How much shield you have left
  this.cpu = cpu;//If you are a cpu
  this.damage = damage;//How much damage you have taken
  this.xVel = xVel;//x velocity
  this.yVel = yVel;//y velocity
  this.look = look;//0: neither 1: up 2: down
  this.dir = dir;//1: right 2: left
  this.attacking = attacking;//If you are attacking
  this.inv = inv;//How much invinsibility you have
	this.lives = lives;//How many lives you have
	this.alive = alive;//If you are alive
	this.airSpecial = airSpecial;//Stops you from using special attack twice in the air
  this.character = character;//The character object
	
	this.name = function() {
		if(this.character.pic === quotePic) {
			return "Quote";
		}
		if(this.character.pic === fawfulPic) {
			return "Fawful";
		}
		if(this.character.pic === balosPic) {
			return "Ballos";
		}
		if(this.character.pic === floweyPic) {
			return "Flowey";
		}
		if(this.character.pic === glitchPic) {
			return "Glitch";
		}
		if(this.character.pic === sansPic) {
			return "Sans";
		}
	}
}
