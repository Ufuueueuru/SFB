function playAttack(u, i) {
	if(attack[u].type === "gun"){
		if(attack[u].dir === 1){
			attack[u].x += 5;
		}
		if(attack[u].dir === 2){
			attack[u].x -= 5;
		}
	}
	
	if(attack[u].type === "high bone"){
		if(attack[u].dir === 1){
			attack[u].x += 3;
			attack[u].y += 2;
		}
		if(attack[u].dir === 2){
			attack[u].x -= 3;
			attack[u].y += 2;
		}
	}
	
	if(attack[u].type === "gun up"){
		attack[u].y -= 5;
	}
	
	if(attack[u].type === "glitch") {
		if(attack[u].player === i) {
			attack[u].x = player[i].x + random(-25, 5);
			attack[u].y = player[i].y + random(-30, 10);
		}
	}
	
	if(attack[u].type === "nemesis"){
		attack[u].y -= 7;
	}
	
	if(attack[u].type === "jump") {
		if(attack[u].player === i) {
			attack[u].x = player[i].x - 25;
			attack[u].y = player[i].y - 30;
			player[i].yVel = -8;
			player[i].airSpecial = false;
		}
	}
	
	if(attack[u].type === "booster") {
		if(attack[u].player === i) {
			attack[u].x = player[i].x - 10;
			attack[u].y = player[i].y + 30;
			player[i].yVel = -8;
			player[i].airSpecial = false;
		}
	}
	
	if(attack[u].type === "bones") {
		if(attack[u].player === i) {
			attack[u].y -= 2;
			attack[u].h += 2;
			player[i].airSpecial = false;
		}
	}
}
