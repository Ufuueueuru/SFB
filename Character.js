function Character(pic) {
	this.pic = pic;
	
	if(true) {
		this.range = 100;
		
		if(this.pic === quotePic) {
			this.range = 150;
		}
		
		if(this.pic === fawfulPic) {
			this.range = 140;
		}
		
		if(this.pic === sansPic) {
			this.range = 130;
		}
		
		if(this.pic === balosPic) {
			this.range = 80;
		}
		
		if(this.pic === glitchPic) {
			this.range = 40;
		}
	}//Range
	
	if(true) {
		this.animation = new Animation(0, 0, 36, [], [], [], []);//default

		if(this.pic === quotePic) {
			this.animation = new Animation(0, 0, 36, [quote4, quote5, quote4, quote7], [], [quote0, quote1, quote0, quote3], []);
		}

		if(this.pic === floweyPic) {
			this.animation = new Animation(0, 0, 36, [floweyPic], [], [floweyPic], []);
		}

		if(this.pic === glitchPic) {
			this.animation = new Animation(0, 0, 36, [glitchPic], [], [glitchPic], []);
		}

		if(this.pic === sansPic) {
			this.animation = new Animation(0, 0, 12, [sans0, sans1], [], [sans2, sans3], []);
		}

		if(this.pic === balosPic) {
			this.animation = new Animation(0, 0, 36, [balosPic], [], [balosPic], []);
		}

		if(this.pic === fawfulPic) {
			this.animation = new Animation(0, 0, 36, [fawful0, fawful1, fawful2, fawful3], [], [fawful4, fawful5, fawful6, fawful7], []);
		}
	}//animations
	
	if(true) {
		this.launch = 1;
		if(this.pic === sansPic) {
			this.launch = 1.2;
		}
		if(this.pic === balosPic) {
			this.launch = 1.1;
		}
		if(this.pic === fawfulPic) {
			this.launch = 0.8;
		}
		if(this.pic === floweyPic) {
			this.launch = 1.4;
		}
	}//Vulnerability
	
	if(true) {
		this.inv = 50;
		if(this.pic === sansPic) {
			this.inv = 15;
		}
		if(this.pic === balosPic) {
			this.inv = 30;
		}
		if(this.pic === floweyPic) {
			this.inv = 2;
		}
		if(this.pic === glitchPic) {
			this.inv = 300;
		}
	}//Invinsibility
	
	if(true){
		this.attack = function(index) {
			if(player[index].dir === 1){
				player[index].attacking = true;
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
				player[index].attacking = true;
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
		
		if(this.pic === sansPic) {
			this.attack = function(index) {
				if(player[index].dir === 1){
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 5,
						y: player[index].y - 50,
						w: 10,
						h: 10,
						time: 40,
						player: index,
						damage: 6,
						launch: 0.1,
						type: "high bone",
						dir: 1
					});
				}
				if(player[index].dir === 2){
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 5,
						y: player[index].y - 50,
						w: 10,
						h: 10,
						time: 40,
						player: index,
						damage: 6,
						launch: 0.1,
						type: "high bone",
						dir: 2
					});
				}
			}
		}//sans
		
		if(this.pic === quotePic) {
			this.attack = function(index) {
				if(player[index].look === 1) {
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 12,
						y: player[index].y - 20,
						w: 25,
						h: 30,
						time: 40,
						player: index,
						damage: 4,
						launch: 0.2,
						type: "gun up",
						dir: 2
					});
				} else {
					if(player[index].dir === 2){
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 45,
							y: player[index].y - 10,
							w: 30,
							h: 25,
							time: 40,
							player: index,
							damage: 4,
							launch: 0.2,
							type: "gun",
							dir: 2
						});
					}
					if(player[index].dir === 1){
						player[index].attacking = true;
						attack.push({
							x: player[index].x + 15,
							y: player[index].y - 10,
							w: 30,
							h: 25,
							time: 40,
							player: index,
							damage: 4,
							launch: 0.2,
							type: "gun",
							dir: 1
						});
					}
				}
			}
		}//quote

		if(this.pic === balosPic) {
			this.attack = function(index) {
				if(player[index].look === 1) {
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 12,
						y: player[index].y - 60,
						w: 25,
						h: 25,
						time: 20,
						player: index,
						damage: 5,
						launch: 0.1,
						type: "circle",
						dir: 1
					});
				} else {
					if(player[index].dir === 1){
						player[index].attacking = true;
						attack.push({
							x: player[index].x + 35,
							y: player[index].y - 10,
							w: 25,
							h: 25,
							time: 20,
							player: index,
							damage: 3,
							launch: 0.6,
							type: "circle",
							dir: 1
						});
					}
					if(player[index].dir === 2){
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 60,
							y: player[index].y - 10,
							w: 25,
							h: 25,
							time: 20,
							player: index,
							damage: 3,
							launch: 0.6,
							type: "circle",
							dir: 2
						});
					}
				}
			}
		}//ballos

		if(this.pic === fawfulPic) {
			this.attack = function(index) {
				if(player[index].look === 1) {
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 10,
						y: player[index].y - 5,
						w: 10,
						h: 10,
						time: 35,
						player: index,
						damage: 6,
						launch: 0.1,
						type: "gun up",
						dir: 1
					});
				} else {
					if(player[index].dir === 1){
						player[index].attacking = true;
						attack.push({
							x: player[index].x + 25,
							y: player[index].y - 5,
							w: 10,
							h: 10,
							time: 35,
							player: index,
							damage: 6,
							launch: 0.1,
							type: "gun",
							dir: 1
						});
					}
					if(player[index].dir === 2){
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 35,
							y: player[index].y - 5,
							w: 10,
							h: 10,
							time: 35,
							player: index,
							damage: 6,
							launch: 0.1,
							type: "gun",
							dir: 2
						});
					}
				}
			}
		}//fawful
		
		if(this.pic === glitchPic) {
			this.attack = function(index) {
				if(player[index].dir === 1){
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 10,
						y: player[index].y - 10,
						w: 20,
						h: 20,
						time: 200,
						player: index,
						damage: 16,
						launch: 0.8,
						type: "glitch",
						dir: 1
					});
				}
				if(player[index].dir === 2){
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 10,
						y: player[index].y - 10,
						w: 20,
						h: 20,
						time: 200,
						player: index,
						damage: 16,
						launch: 0.8,
						type: "glitch",
						dir: 2
					});
				}
			}
		}//sans
	}//attacks
	
	if(true){
		this.special = function(index) {
			if(player[index].look === 1 && player[index].airSpecial) {
				player[index].attacking = true;
				attack.push({
					x: player[index].x - 25,
					y: player[index].y - 30,
					w: 50,
					h: 60,
					time: 40,
					player: index,
					damage: 1,
					launch: 0.4,
					type: "jump",
					dir: 1
				});
			}
		}
		
		if(this.pic === sansPic) {
			this.special = function(index) {
				if(player[index].airSpecial) {
					if(player[index].look === 1) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 25,
							y: player[index].y - 30,
							w: 50,
							h: 60,
							time: 40,
							player: index,
							damage: 1,
							launch: 0.4,
							type: "jump",
							dir: 1
						});
					} else {
						if(player[index].look === 2) {
							player[index].attacking = true;
							attack.push({
								x: player[index].x - 40,
								y: player[index].y + 30,
								w: 80,
								h: 0,
								time: 120,
								player: index,
								damage: 1,
								launch: 0.8,
								type: "bones",
								dir: 1
							});
						}
					}
				}
			}
		}
		
		if(this.pic === quotePic) {
			this.special = function(index) {
				if(player[index].airSpecial) {
					if(player[index].look === 1) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 10,
							y: player[index].y + 30,
							w: 20,
							h: 30,
							time: 70,
							player: index,
							damage: 0,
							launch: 0.1,
							type: "booster",
							dir: 1
						});
					} else {
						if(player[index].look === 2) {
							player[index].attacking = true;
							attack.push({
								x: player[index].x - 7,
								y: player[index].y - 20,
								w: 15,
								h: 20,
								time: 60,
								player: index,
								damage: 12,
								launch: 0.1,
								type: "nemesis",
								dir: 1
							});
						} else {
							if(player[index].dir === 2){
								player[index].attacking = true;
								attack.push({
									x: player[index].x - 45,
									y: player[index].y,
									w: 30,
									h: 10,
									time: 30,
									player: index,
									damage: 1,
									launch: 0.6,
									type: "gun",
									dir: 2
								});
							}
							if(player[index].dir === 1){
								player[index].attacking = true;
								attack.push({
									x: player[index].x + 15,
									y: player[index].y,
									w: 30,
									h: 10,
									time: 30,
									player: index,
									damage: 1,
									launch: 0.6,
									type: "gun",
									dir: 1
								});
							}
						}
					}
				}
			}
		}
	}//special attacks
}
