function Player(x, y, cpu, damage, xVel, yVel, look, dir, attacking, inv, character) {
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
  this.character = character;
}
