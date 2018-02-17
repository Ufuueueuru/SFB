function AI() {
	this.target = [0, 0, 0, 0];
	this.dist = [0, 0, 0, 0];
	
	this.calculate = function(i) {
		//AI tendencies
		this.dist[i] = 9999;
		for(var p = 0;p < player.length;p ++) {
			if(player[p].character.pic !== undefined && player[p].alive && i !== p && dist(player[i].x, player[i].y, player[p].x, player[p].y) < this.dist[i]) {
				this.target[i] = p;
				this.dist[i] = dist(player[i].x, player[i].y, player[p].x, player[p].y);
			}
		}
		
		if(player[this.target[i]].x - player[i].x > 30) {//Go towards the player
			cpuControls[i].right = true;
		} else {
			cpuControls[i].right = false;
		}
		
		if(player[this.target[i]].x - player[i].x < -30) {//Go towards the player
			cpuControls[i].left = true;
		} else {
			cpuControls[i].left = false;
		}
		
		/*if(player[this.target[i]].x > player[i].x) {
			player[i].dir = 1;
		}
		
		if(player[this.target[i]].x < player[i].x) {
			player[i].dir = 2;
		}*/
		//I don't know if this works
		
		if(dist(player[this.target[i]].x, player[this.target[i]].y, player[i].x, player[i].y) < player[i].character.range) {//Attack when close
			cpuControls[i].attack = true;
		} else {
			cpuControls[i].attack = false;
		}
		
		if(player[i].y - player[this.target[i]].y > 100) {//Use special to go up to the player
			cpuControls[i].up = true;
			cpuControls[i].special = true;
		} else {
			cpuControls[i].special = false;
		}
		/*
		if(player[i].y - player[this.target[i]].y > 30 && player[i].y - player[this.target[i]].y < 1000 && player[i].x - player[this.target[i]].x < 50 && player[i].x - player[this.target[i]].x > -50) {
			if(player[this.target[i]].damage > 50) {//not sure
				cpuControls[i].up = false;
				cpuControls[i].down = true;
				cpuControls[i].special = true;
			} else {
				cpuControls[i].down = false;
			}
		} else {
			cpuControls[i].down = false;
		}*/
		
		if(player[this.target[i]].y - player[i].y < -20) {//Jump up to the player
			cpuControls[i].up = true;
		} else {
			cpuControls[i].up = false;
		}
		
		if(player[this.target[i]].y > 300 || player[this.target[i]].x < arena.bounds[0] || player[this.target[i]].x > arena.bounds[1]) {//Don't fall off the edge
			cpuControls[i].left = false;
			cpuControls[i].right = false;
		}
		
		if(dist(player[i].x, player[i].y, player[this.target[i]].x, player[this.target[i]].y) < 30) {//Attempts to get rid of stale mates
			if(random(0,1) > .5) {
				cpuControls[i].right = true;
				cpuControls[i].left = false;
			} else {
				cpuControls[i].left = true;
				cpuControls[i].right = false;
			}
		}
		
		if(player[i].x < arena.bounds[0]) {//Stays away from the edges
			cpuControls[i].right = true;
			cpuControls[i].left = false;
		}
		
		if(player[i].x > arena.bounds[1]) {//Stays away from the edges
			cpuControls[i].right = false;
			cpuControls[i].left = true;
		}
		
		if(player[i].yVel > 8) {//jumps when going down too fast
			cpuControls[i].up = true;
		}
		
		if(player[i].yVel > 16) {//Special jumps when going down too fast
			cpuControls[i].up = true;
			cpuControls[i].special = true;
		}
	}
	
	this.run = function(i) {
		if(player[i].cpu) {
			if(player[i].character.pic !== undefined && player[i].alive){
				if(player[i].inv > 0){
					player[i].inv --;
				}
				picCount ++;
				if(player[i].inv < 1 || player[i].inv % 2 === 0){
					player[i].character.animation.draw(player[i].x, player[i].y, 50, 60);
					//image(player[i].character.pic,player[i].x,player[i].y,50,60);
				}
				if(i === 0){
					fill(220,130,130);
				}
				if(i === 1){
					fill(130,130,220);
				}
				if(i === 2){
					fill(130,220,130);
				}
				if(i === 3){
					fill(220,130,220);
				}
				textSize(25);
				if(!player[i].cpu) {
					text("Player " + (i + 1),player[i].x,player[i].y - 40);
				} else {
					text("CPU " + (i + 1),player[i].x,player[i].y - 40);
				}

				if(player[i].shield) {
					for(var s = 0;s < 50;s += 3) {
						fill(255 - (4*player[i].shieldNum), 50, 55 + (4*player[i].shieldNum), 10 + s + (frameCount % 50));
						ellipse(player[i].x, player[i].y, 50-s, 50-s);
					}
				}

				if(player[i].xVel > 0){
						player[i].xVel = floor(player[i].xVel*100)/110;
				}else{
						player[i].xVel = ceil(player[i].xVel*100)/110;
				}
				player[i].x += player[i].xVel;
				player[i].y += player[i].yVel;
				if(cpuControls[i].right && player[i].attacking === false && player[i].xVel < 2.5 && !player[i].shield){
					player[i].xVel ++;
					player[i].dir = 1;
				}
				if(cpuControls[i].left && player[i].attacking === false && player[i].xVel > -2.5 && !player[i].shield){
					player[i].xVel --;
					player[i].dir = 2;
				}
				
				if(player[i].dir === 1) {//Makes the animation face the same way as the character
					player[i].character.animation.dir = 0;
				}
				if(player[i].dir === 2) {//Makes the animation face the same way as the character
					player[i].character.animation.dir = 2;
				}
				
				if(cpuControls[i].up && player[i].attacking === false && !player[i].shield){
					player[i].look = 1;
				}
				if(cpuControls[i].down && player[i].attacking === false && !player[i].shield){
					player[i].look = 2;
				}
				if(!cpuControls[i].down && !cpuControls[i].up) {
					player[i].look = 0;
				}

				if(cpuControls[i].shield && player[i].shieldNum > 40) {
					player[i].shield = true;
				}

				if(player[i].shield && frameCount % 2 === 0) {
					player[i].shieldNum --;
				}

				if(!cpuControls[i].shield || player[i].shieldNum <= 0) {
					player[i].shield = false;
				}

				if(!player[i].shield && player[i].shieldNum < 200 && frameCount % 3 === 0) {
					player[i].shieldNum ++;
				}

				if(cpuControls[i].left) {
					if(!player[i].shield) {
						player[i].character.animation.move(2);
					}
				} else {
					if(cpuControls[i].right && !player[i].shield) {
						player[i].character.animation.move(0);
					}
				}

				if(!cpuControls[i].left && !cpuControls[i].right) {
					player[i].character.animation.reset();
				}

				if(player[i].shield) {
					player[i].character.animation.reset();
				}

				arena.collideCPU(i);
				if(!player[i].ground) {
					player[i].yVel += 0.4;
				}
				
				if(player[i].y > 750 || player[i].x < -750 || player[i].x > 750 || player[i].y < -800){
					player[i].lives --;
					if(player[i].lives < 1) {
						player[i].alive = false;
					}
					player[i].damage = 0;
					player[i].inv = 50;
					player[i].shieldNum = 200;
					player[i].x = arena.spawn[i].x;
					player[i].y = arena.spawn[i].y;
					player[i].yVel = 0;
					player[i].xVel = 0;
				}
				if(cpuControls[i].attack && !player[i].attacking && !player[i].shield){
					player[i].character.attack(i);
				}
				if(cpuControls[i].special && !player[i].attacking && !player[i].shield) {
					player[i].character.special(i);
				}
			}
			for(var u = 0;u < attack.length;u ++){
				if(i === attack[u].player){
					player[i].attacking = true;
				}
				fill(0,0,0);
				attack[u].time --;
				rect(attack[u].x,attack[u].y,attack[u].w,attack[u].h);
				if(attack[u].x + attack[u].w > player[i].x - 25 && attack[u].x < player[i].x + 25 && attack[u].y + attack[u].h > player[i].y - 30 && attack[u].y < player[i].y + 30){
					if(player[i].x >= attack[u].x + attack[u].w/2 && i !== attack[u].player){
						if(player[i].inv < 1){
							if(!player[i].shield) {
								player[i].damage += attack[u].damage;
							} else {
								player[i].damage += round(attack[u].damage / 3);
								player[i].shieldNum -= 3 * attack[u].damage;
							}
							player[i].xVel += player[i].damage *(3/2)* attack[u].launch * player[i].character.launch;
							player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch;
							attack[u].time = 0;
							player[i].inv = player[attack[u].player].character.inv;
						}
					}else{
						if(player[i].x < attack[u].x + attack[u].w/2 && i !== attack[u].player){
							if(player[i].inv < 1){
								if(!player[i].shield) {
									player[i].damage += attack[u].damage;
								} else {
									player[i].damage += round(attack[u].damage / 3);
									player[i].shieldNum -= 3 * attack[u].damage;
								}
								player[i].xVel -= player[i].damage *(3/2)* attack[u].launch * player[i].character.launch;
								player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch;
								attack[u].time = 0;
								player[i].inv = player[attack[u].player].character.inv;
							}
						}
					}
				}
				playAttack(u, i);
				if(attack[u].time <= 0){
					player[attack[u].player].attacking = false;
					attack.splice(u,1);
				}
			}
		}
	}//Runs the physics of a player
}
