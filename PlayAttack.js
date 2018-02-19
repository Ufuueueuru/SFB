function playAttack(u, i) {
	if(attack[u].player === i) {
		if(attack[u].type === "gun"){
			if(attack[u].dir === 1){
				attack[u].x += 20;
			}
			if(attack[u].dir === 2){
				attack[u].x -= 20;
			}
		}

		if(attack[u].type === "high bone"){
			if(attack[u].dir === 1){
				attack[u].x += 12;
				attack[u].y += 8;
			}
			if(attack[u].dir === 2){
				attack[u].x -= 12;
				attack[u].y += 8;
			}
		}

		if(attack[u].type === "gun up"){
			attack[u].y -= 20;
		}

		if(attack[u].type === "gun down"){
			attack[u].y += 20;
		}

		if(attack[u].type === "glitch") {
			attack[u].x = player[i].x + random(-25, 5);
			attack[u].y = player[i].y + random(-30, 10);
		}

		if(attack[u].type === "glitch special") {
			attack[u].x = player[i].x + random(-30, -5);
			attack[u].y = player[i].y + random(-30, -5);
			player[i].yVel -= 3;
			player[i].airSpecial = false;
		}

		if(attack[u].type === "nemesis"){
			attack[u].y -= 28;
		}

		if(attack[u].type === "jump") {
			attack[u].x = player[i].x - 25;
			attack[u].y = player[i].y - 30;
			player[i].yVel = -8;
			player[i].airSpecial = false;
		}
		
		if(attack[u].type === "sword right") {//link
			attack[u].x = player[i].x + 15;
			attack[u].y = player[i].y;
		}
		
		if(attack[u].type === "sword left") {//link
			attack[u].x = player[i].x - 55;
			attack[u].y = player[i].y;
		}
		
		if(attack[u].type === "sword up") {//link
			attack[u].x = player[i].x - 5;
			attack[u].y = player[i].y - 70;
		}
		
		if(attack[u].type === "sword down") {//link
			attack[u].x = player[i].x - 5;
			attack[u].y = player[i].y + 30;
		}

		if(attack[u].type === "jump sans") {
			attack[u].x = player[i].x - 15;
			attack[u].y = player[i].y - 15;
			player[i].yVel = -8;
			player[i].airSpecial = false;
		}

		if(attack[u].type === "booster") {
			attack[u].x = player[i].x - 10;
			attack[u].y = player[i].y + 30;
			player[i].yVel = -8;
			player[i].airSpecial = false;
		}

		if(attack[u].type === "bones") {
			attack[u].y -= 8;
			attack[u].h += 8;
			attack[u].damage ++;
			player[i].airSpecial = false;
		}
	}
}
