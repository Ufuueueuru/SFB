function Player(x, y, cpu, damage, xVel, yVel, look, dir, attacking, inv, lives, alive, character) {
  this.x = x;
  this.y = y;
  this.cpu = cpu;
  this.damage = damage;
  this.xVel = xVel;
  this.yVel = yVel;
  this.look = look;//0: neither 1: up 2: down
  this.dir = dir;//1: right 2: left
  this.attacking = attacking;
  this.inv = inv;
  this.lives = lives;
  this.alive = alive;
  this.character = character;
	
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
