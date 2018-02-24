function Arena(name) {
	this.name = name;
	
	this.blocks = [];
	
	this.check = [];
	
	this.formArena = function() {
		if(this.name === "Classic") {//Arena spots
			this.spawn = [
				new Spawn(-225, -30),
				new Spawn(-82, -30),
				new Spawn(82, -30),
				new Spawn(225, -30)
			];
			this.bounds = [-260, 260];
			this.blocks = [
				new Block(-250, 0, 500, 200)
			];
		}
		if(this.name === "Arena") {
			this.spawn = [
				new Spawn(-170, -5),
				new Spawn(-52, -5),
				new Spawn(52, -5),
				new Spawn(170, -5)
			];
			this.bounds = [-260, 260];
			this.blocks = [
				new Block(-250, 50, 500, 50),
				new Block(-250, -200, 50, 300),
				new Block(200, -200, 50, 300)
			];
		}
	}
	
	this.collide = function(i) {
		this.check = [];
		for(var o = 0;o < this.blocks.length;o ++) {
			this.blocks[o].draw();
			this.blocks[o].collide(i);
		}
		if(this.check.length < 1) {
			player[i].ground = false;
			if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
				player[i].yVel = -7;
				player[i].jump = false;
			}
		} else {
			player[i].ground = true;
			player[i].jump = true;
		}
	}
	
	this.collideCPU = function(i) {
		this.check = [];
		for(var o = 0;o < this.blocks.length;o ++) {
			this.blocks[o].draw();
			this.blocks[o].collideCPU(i);
		}
		if(this.check.length < 1) {
			player[i].ground = false;
			if(player[i].jump && cpuControls[i].up && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
				player[i].yVel = -7;
				player[i].jump = false;
			}
		} else {
			player[i].ground = true;
			player[i].jump = true;
		}
	}
}
