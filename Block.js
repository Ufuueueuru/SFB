function Block(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.collide = function(i) {
		/*if(!(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225)){
			if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
				player[i].yVel = -7;
				player[i].jump = false;
			}
		}
		if(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225){
			arena.check.push(1);
			player[i].airSpecial = true;
			player[i].jump = true;
			player[i].yVel = -0.7;
			if(player[i].y + player[i].yVel <= -30){
				player[i].yVel = 0;
			}
			if(keys[controls[i].up] && player[i].attacking === false && !player[i].shield){
				player[i].yVel -= 7;
			}
		}
		if(player[i].y > -20 && player[i].y < 215){
			if(player[i].x > -255 && player[i].x < -230){
				player[i].xVel = -1;
			}
			if(player[i].x < 255 && player[i].x > 230){
				player[i].xVel = 1;
			}
		}
		if(player[i].y > 170 && player[i].x > -250 && player[i].x < 250 && player[i].y < 225){
			player[i].yVel = 5;
		}*/
		/*if(!(player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y > this.y-30 && player[i].y < this.y + this.height + 25)){
			if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
				player[i].yVel = -7;
				player[i].jump = false;
			}
		}*/
		if(player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y > this.y-30 && player[i].y < this.y + this.height){
			arena.check.push(1);
			player[i].airSpecial = true;
			player[i].yVel = -0.7;
			if(/*player[i].y + player[i].yVel <= -30 || */player[i].y < this.y - 28){
				player[i].yVel = 0;
			}
			if(keys[controls[i].up] && player[i].attacking === false && !player[i].shield){
				player[i].yVel -= 7;
			}
		}
		if(player[i].y > this.y-20 && player[i].y < this.y + this.height){
			if(player[i].x > this.x-30 && player[i].x < this.x+5){
				player[i].xVel = -1.5;
			}
			if(player[i].x < this.x+this.width+30 && player[i].x > this.x+this.width+5){
				player[i].xVel = 1.5;
			}
		}
		if(player[i].y > this.y+this.height-30 && player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y < this.y+this.height+30){
			player[i].yVel = 5;
		}
	}
	
	this.collideCPU = function(i) {
		/*if(!(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225)){
			if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
				player[i].yVel = -7;
				player[i].jump = false;
			}
		}
		if(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225){
			arena.check.push(1);
			player[i].airSpecial = true;
			player[i].jump = true;
			player[i].yVel = -0.7;
			if(player[i].y + player[i].yVel <= -30){
				player[i].yVel = 0;
			}
			if(keys[controls[i].up] && player[i].attacking === false && !player[i].shield){
				player[i].yVel -= 7;
			}
		}
		if(player[i].y > -20 && player[i].y < 215){
			if(player[i].x > -255 && player[i].x < -230){
				player[i].xVel = -1;
			}
			if(player[i].x < 255 && player[i].x > 230){
				player[i].xVel = 1;
			}
		}
		if(player[i].y > 170 && player[i].x > -250 && player[i].x < 250 && player[i].y < 225){
			player[i].yVel = 5;
		}*/
		/*if(!(player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y > this.y-30 && player[i].y < this.y + this.height + 25)){
			if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
				player[i].yVel = -7;
				player[i].jump = false;
			}
		}*/
		if(player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y > this.y-30 && player[i].y < this.y + this.height){
			arena.check.push(1);
			player[i].airSpecial = true;
			player[i].yVel = -0.7;
			if(/*player[i].y + player[i].yVel <= -30 || */player[i].y < this.y - 28){
				player[i].yVel = 0;
			}
			if(cpuControls[i].up && player[i].attacking === false && !player[i].shield){
				player[i].yVel -= 7;
			}
		}
		if(player[i].y > this.y-20 && player[i].y < this.y + this.height){
			if(player[i].x > this.x-30 && player[i].x < this.x+5){
				player[i].xVel = -1.5;
			}
			if(player[i].x < this.x+this.width+30 && player[i].x > this.x+this.width+5){
				player[i].xVel = 1.5;
			}
		}
		if(player[i].y > this.y+this.height-30 && player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y < this.y+this.height+30){
			player[i].yVel = 5;
		}
	}
	
	this.draw = function() {
		fill(0);
		rect(this.x, this.y, this.width, this.height);
	}
}
