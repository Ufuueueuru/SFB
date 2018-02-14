function playAttack(u) {
	if(attack[u].type === "gun"){
		if(attack[u].dir === 1){
			attack[u].x += 5;
		}
		if(attack[u].dir === 2){
			attack[u].x -= 5;
		}
	}
}
