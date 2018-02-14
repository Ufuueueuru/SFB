function Character(pic) {
	this.pic = pic;
	
	this.attack = function(index) {
		if(player[index].dir === 1){
			attack.push({
				x: player[index].x + 25,
				y: player[index].y - 20,
				w: 50,
				h: 50,
				time: 100,
				player: index,
				damage: 5,
				launch: 0.3,
				type: "default",
				dir: 1
			});
		}
		if(player[index].dir === 2){
			attack.push({
				x: player[index].x - 75,
				y: player[index].y - 20,
				w: 50,
				h: 50,
				time: 100,
				player: index,
				damage: 5,
				launch: 0.3,
				type: "default",
				dir: 2
			});
		}
	}//default
	
	if(this.pic === quotePic) {
		this.attack = function(index) {
			if(player[index].dir === 1){
				attack.push({
					x: player[index].x + 25,
					y: player[index].y - 10,
					w: 30,
					h: 25,
					time: 40,
					player: index,
					damage: 3,
					launch: 0.2,
					type: "gun",
					dir: 1
				});
			}
			if(player[index].dir === 2){
				attack.push({
					x: player[index].x - 55,
					y: player[index].y - 10,
					w: 30,
					h: 25,
					time: 40,
					player: index,
					damage: 3,
					launch: 0.2,
					type: "gun",
					dir: 2
				});
			}
		}
	}//quote
	
	if(this.pic === balosPic) {
		this.attack = function(index) {
			if(player[index].dir === 1){
				attack.push({
					x: player[index].x + 35,
					y: player[index].y - 10,
					w: 25,
					h: 25,
					time: 5,
					player: index,
					damage: 2,
					launch: 0.5,
					type: "circle",
					dir: 1
				});
			}
			if(player[index].dir === 2){
				attack.push({
					x: player[index].x - 60,
					y: player[index].y - 10,
					w: 25,
					h: 25,
					time: 5,
					player: index,
					damage: 2,
					launch: 0.5,
					type: "circle",
					dir: 2
				});
			}
		}
	}//ballos
	
	if(this.pic === fawfulPic) {
		this.attack = function(index) {
			if(player[index].dir === 1){
				attack.push({
					x: player[index].x + 25,
					y: player[index].y - 5,
					w: 10,
					h: 10,
					time: 35,
					player: index,
					damage: 7,
					launch: 0.1,
					type: "gun",
					dir: 1
				});
			}
			if(player[index].dir === 2){
				attack.push({
					x: player[index].x - 35,
					y: player[index].y - 5,
					w: 10,
					h: 10,
					time: 35,
					player: index,
					damage: 7,
					launch: 0.1,
					type: "gun",
					dir: 2
				});
			}
		}
	}//fawful
}
