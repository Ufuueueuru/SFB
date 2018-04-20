var emptyMusic = {
	play: function(){},
	loop: function(){},
	isPlaying: function(){return true;},
	stop: function(){}
};

var Music = {
	main: emptyMusic,
	intro: emptyMusic,
	theme: emptyMusic
};
function Spawn(x, y) {
	this.x = x;
	this.y = y;
}
function Character(pic) {
	this.pic = pic;
	
	this.charge = 0;
	
	if(this.pic === randomPic) {
		this.random = Math.ceil(Math.random()*10);
		
		if(this.random === 1) {
			this.pic = quotePic;
		}
		
		if(this.random === 2) {
			this.pic = fawfulPic;
		}
		
		if(this.random === 3) {
			this.pic = sansPic;
		}
		
		if(this.random === 4) {
			this.pic = floweyPic;
		}
		
		if(this.random === 5) {
			this.pic = glitchPic;
		}
		
		if(this.random === 6) {
			this.pic = balosPic;
		}
		
		if(this.random === 7) {
			this.pic = linkPic;
		}
		
		if(this.random === 8) {
			this.pic = toadPic;
		}
		
		if(this.random === 9) {
			this.pic = egaddPic;
		}
		
		if(this.random === 10) {
			this.pic = badelinePic;
		}
	}
	
	if(true) {
		this.range = 100;
		
		if(this.pic === choochooPic) {
			this.range = 170;
		}
		
		if(this.pic === badelinePic) {
			this.range = 250;
		}
		
		if(this.pic === quotePic) {
			this.range = 250;
		}
		
		if(this.pic === fawfulPic) {
			this.range = 230;
		}
		
		if(this.pic === sansPic) {
			this.range = 160;
		}
		
		if(this.pic === balosPic) {
			this.range = 80;
		}
		
		if(this.pic === glitchPic) {
			this.range = 40;
		}
		
		if(this.pic === linkPic) {
			this.range = 80;
		}
	}//Range
	
	if(true) {
		this.animation = new Animation(0, 0, 36, [], [], [], []);//default
		
		if(this.pic === choochooPic) {
			this.animation = new Animation(0, 0, 1, [choochooPic], [], [choochooPic], []);
		}
		
		if(this.pic === badelinePic) {
			this.animation = new Animation(0, 0, 1, [badeline0], [], [badeline1], []);
		}
		
		if(this.pic === quotePic) {
			this.animation = new Animation(0, 0, 36, [quote4, quote5, quote4, quote7], [], [quote0, quote1, quote0, quote3], []);
		}
		
		if(this.pic === egaddPic) {
			this.animation = new Animation(0, 0, 36, [egadd3, egadd4, egadd5, egadd4, egadd3, egadd2, egadd1, egadd2], [], [egadd8, egadd9, egadd10, egadd9, egadd8, egadd7, egadd6, egadd7], []);
		}
		
		if(this.pic === linkPic) {
			this.animation = new Animation(0, 0, 18, [link2, link3], [], [link0, link1], []);
		}

		if(this.pic === floweyPic) {
			this.animation = new Animation(0, 0, 36, [floweyPic], [], [floweyPic], []);
		}

		if(this.pic === glitchPic) {
			this.animation = new Animation(0, 0, 8, [glitchPic, glitch1, glitch2, glitch3], [], [glitchPic, glitch3, glitch1, glitch2], []);
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
		
		if(this.pic === toadPic) {
			this.animation = new Animation(0, 0, 36, [toad0, toad1, toad2, toad3, toad4, toad5, toad6, toad7], [], [toad8, toad9, toad10, toad11, toad12, toad13, toad14, toad15], []);
		}
	}//animations
	
	if(true) {
		this.launch = 1;
		if(this.pic === choochooPic) {
			this.launch = 5;
		}
		if(this.pic === badelinePic) {
			this.launch = 1.5;
		}
		if(this.pic === sansPic) {
			this.launch = 2;
		}
		if(this.pic === balosPic) {
			this.launch = 1.2;
		}
		if(this.pic === fawfulPic) {
			this.launch = 0.9;
		}
		if(this.pic === floweyPic) {
			this.launch = 1.4;
		}
		if(this.pic === toadPic) {
			this.launch = 0.5;
		}
	}//Vulnerability
	
	if(true) {
		this.inv = 50;
		if(this.pic === choochooPic) {
			this.inv = 1;
		}
		if(this.pic === badelinePic) {
			this.inv = 40;
		}
		if(this.pic === sansPic) {
			this.inv = 1;
		}
		if(this.pic === balosPic) {
			this.inv = 45;
		}
		if(this.pic === floweyPic) {
			this.inv = 15;
		}
		if(this.pic === linkPic) {
			this.inv = 20;
		}
		if(this.pic === glitchPic) {
			this.inv = 200;
		}
		if(this.pic === quotePic) {
			this.inv = 30;
		}
		if(this.pic === toadPic) {
			this.inv = 60;
		}
		if(this.pic === egaddPic) {
			this.inv = 30;
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
		
		if(this.pic === choochooPic) {
			this.attack = function(index) {
				player[index].attacking = true;
				attack.push({
					x: player[index].x - 5,//x
					y: player[index].y - 5,//y
					w: 10,//w
					h: 10,//h
					time: 5,//time
					player: index,//player
					damage: 1,//damage
					launch: 0.5,//launch
					type: "seek",//type
					dir: 1//dir
				});
			}
		}
		
		if(this.pic === badelinePic) {
			this.attack = function(index) {
				player[index].attacking = true;
				attack.push({
					x: player[index].x - 10,//x
					y: player[index].y - 10,//y
					w: 20,//w
					h: 20,//h
					time: 130,//time
					player: index,//player
					damage: 4,//damage
					launch: 0.3,//launch
					type: "orb",//type
					dir: 1//dir
				});
			}
		}
		
		if(this.pic === toadPic) {
			this.attack = function(index) {
				if(player[index].dir === 1){
					player[index].attacking = true;
					attack.push({
						x: player[index].x + 15,//x
						y: player[index].y - 10,//y
						w: 30,//w
						h: 20,//h
						time: 20,//time
						player: index,//player
						damage: 6,//damage
						launch: 0.2,//launch
						type: "default",//type
						dir: 1//dir
					});
				}
				if(player[index].dir === 2){
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 45,
						y: player[index].y - 10,
						w: 30,
						h: 20,
						time: 20,
						player: index,
						damage: 6,
						launch: 0.2,
						type: "default",
						dir: 2
					});
				}
			}
		}
		
		if(this.pic === egaddPic) {
			this.attack = function(index) {
				if(player[index].look === 1) {
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 10,
						y: player[index].y - 40,
						w: 20,
						h: 20,
						time: 20,
						player: index,
						damage: 2,
						launch: 0.3,
						type: "punch",
						dir: 1
					});
				} else {
					if(player[index].look === 2) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 5,
							y: player[index].y,
							w: 10,
							h: 10,
							time: 100,
							player: index,
							damage: 6,
							launch: 0.7,
							type: "punch",
							dir: 1
						});
					} else {
						if(player[index].dir === 1){
							player[index].attacking = true;
							attack.push({
								x: player[index].x + 15,
								y: player[index].y,
								w: 20,
								h: 20,
								time: 20,
								player: index,
								damage: 3,
								launch: 0.1,
								type: "punch",
								dir: 1
							});
						}
						if(player[index].dir === 2){
							player[index].attacking = true;
							attack.push({
								x: player[index].x - 35,
								y: player[index].y,
								w: 20,
								h: 20,
								time: 20,
								player: index,
								damage: 3,
								launch: 0.1,
								type: "punch",
								dir: 2
							});
						}
					}
				}
			}
		}//egadd
		
		if(this.pic === linkPic) {
			this.attack = function(index) {
				if(player[index].look === 1) {
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 5,
						y: player[index].y - 70,
						w: 15,
						h: 40,
						time: 5,
						player: index,
						damage: 2,
						launch: 0.4,
						type: "sword up",
						dir: 1
					});
				} else {
					if(player[index].look === 2) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 5,
							y: player[index].y + 30,
							w: 15,
							h: 40,
							time: 5,
							player: index,
							damage: 3,
							launch: 0.2,
							type: "sword down",
							dir: 1
						});
					} else {
						if(player[index].dir === 1){
							player[index].attacking = true;
							attack.push({
								x: player[index].x + 15,
								y: player[index].y,
								w: 40,
								h: 15,
								time: 5,
								player: index,
								damage: 4,
								launch: 0.1,
								type: "sword right",
								dir: 1
							});
						}
						if(player[index].dir === 2){
							player[index].attacking = true;
							attack.push({
								x: player[index].x - 55,
								y: player[index].y,
								w: 40,
								h: 15,
								time: 5,
								player: index,
								damage: 4,
								launch: 0.1,
								type: "sword left",
								dir: 2
							});
						}
					}
				}
			}
		}//link
		
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
						damage: 1,
						launch: 0.3,
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
						damage: 1,
						launch: 0.3,
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
					if(player[index].look === 2) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 12,
							y: player[index].y + 20,
							w: 25,
							h: 30,
							time: 40,
							player: index,
							damage: 4,
							launch: 0.2,
							type: "gun down",
							dir: 2
						});
					} else {
						if(player[index].dir === 2){
							player[index].attacking = true;
							attack.push({
								x: player[index].x - 40,
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
								x: player[index].x + 10,
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
						x: player[index].x - 5,
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
					if(player[index].look === 2) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 5,
							y: player[index].y - 5,
							w: 10,
							h: 10,
							time: 35,
							player: index,
							damage: 6,
							launch: 0.1,
							type: "gun down",
							dir: 1
						});
					} else {
						if(player[index].dir === 1){
							player[index].attacking = true;
							attack.push({
								x: player[index].x + 15,
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
								x: player[index].x - 25,
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
						damage: 11,
						launch: 0.6,
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
						damage: 11,
						launch: 0.6,
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
		
		if(this.pic === choochooPic) {
			this.special = function(index) {
				player[index].attacking = true;
				attack.push({
					x: player[index].x,
					y: player[index].y,
					w: 0,
					h: 0,
					time: 5,
					player: index,
					damage: 0,
					launch: 0,
					type: "jump choochoo",
					dir: 1
				});
			}
		}
		
		if(this.pic === badelinePic) {
			this.special = function(index) {
				player[index].attacking = true;
				attack.push({
					x: player[index].x,
					y: player[index].y,
					w: 0,
					h: 0,
					time: 100,
					player: index,
					damage: 0,
					launch: 0,
					type: "fly",
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
							x: player[index].x - 15,
							y: player[index].y - 15,
							w: 30,
							h: 30,
							time: 50,
							player: index,
							damage: 2,
							launch: 0.3,
							type: "jump sans",
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
								time: 30,
								player: index,
								damage: 2,
								launch: 0.5,
								type: "bones",
								dir: 1
							});
						} else {
							if(player[index].dir === 1) {
								player[index].attacking = true;
								attack.push({
									x: player[index].x + 20,
									y: player[index].y - 10,
									w: 0,
									h: 30,
									time: 300,
									player: index,
									damage: 2,
									launch: 0,
									type: "blaster",
									dir: 1
								});
							}
							if(player[index].dir === 2) {
								player[index].attacking = true;
								attack.push({
									x: player[index].x - 20,
									y: player[index].y - 10,
									w: 0,
									h: 30,
									time: 300,
									player: index,
									damage: 2,
									launch: 0,
									type: "blaster",
									dir: 2
								});
							}
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
		
		if(this.pic === glitchPic) {
			this.special = function(index) {
				if(player[index].look === 1 && player[index].airSpecial) {
					player[index].attacking = true;
					attack.push({
						x: player[index].x - 15,
						y: player[index].y - 15,
						w: 30,
						h: 30,
						time: 10,
						player: index,
						damage: 2,
						launch: 1.3,
						type: "glitch special",
						dir: 1
					});
				}
			}
		}
		
		if(this.pic === linkPic) {
			this.special = function(index) {
				if(player[index].airSpecial) {
					if(player[index].look === 1) {
						player[index].attacking = true;
						attack.push({
							x: player[index].x - 5,
							y: player[index].y - 70,
							w: 15,
							h: 40,
							time: 35,
							player: index,
							damage: 1,
							launch: 0.6,
							type: "sword up jump",
							dir: 1
						});
					} else {
						if(player[index].look === 2) {
							if(player[index].dir === 2){
								player[index].attacking = true;
								attack.push({
									x: player[index].x - 55,
									y: player[index].y,
									w: 40,
									h: 15,
									time: 45,
									player: index,
									damage: 4,
									launch: 0.1,
									type: "zoom",
									dir: 2
								});
							}
							if(player[index].dir === 1){
								player[index].attacking = true;
								attack.push({
									x: player[index].x + 15,
									y: player[index].y,
									w: 40,
									h: 15,
									time: 45,
									player: index,
									damage: 4,
									launch: 0.1,
									type: "zoom",
									dir: 1
								});
							}
						} else {
							if(player[index].dir === 2){
								this.charge = 0;
								player[index].attacking = true;
								attack.push({
									x: player[index].x - 45,
									y: player[index].y,
									w: 0,
									h: 10,
									time: 200,
									player: index,
									damage: 1,
									launch: 0.1,
									type: "bow",
									dir: 2
								});
							}
							if(player[index].dir === 1){
								this.charge = 0;
								player[index].attacking = true;
								attack.push({
									x: player[index].x + 15,
									y: player[index].y,
									w: 0,
									h: 10,
									time: 200,
									player: index,
									damage: 1,
									launch: 0.1,
									type: "bow",
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
function Arena(name) {
	this.name = name;
	
	this.blocks = [];
	
	this.check = [];
	
	this.formArena = function() {
		if(this.name === "Classic") {//Arena spots
			this.music = Music.theme;
			this.spawn = [
				new Spawn(-225, -30),
				new Spawn(-82, -30),
				new Spawn(82, -30),
				new Spawn(225, -30)
			];
			this.bounds = [-265, 265];
			this.blocks = [
				new Block(-250, 0, 500, 200)
			];
		}
		if(this.name === "Arena") {
			this.music = Music.theme;
			this.spawn = [
				new Spawn(-100, -5),
				new Spawn(-42, -5),
				new Spawn(42, -5),
				new Spawn(100, -5)
			];
			this.bounds = [-265, 265];
			this.blocks = [
				new Block(-250, 50, 500, 50),
				new Block(-250, -200, 50, 300),
				new Block(200, -200, 50, 300)
			];
		}
		if(this.name === "Castle") {
			this.music = Music.theme;
			this.spawn = [
				new Spawn(-290, -25),
				new Spawn(-100, -25),
				new Spawn(100, -25),
				new Spawn(290, -25)
			];
			this.bounds = [-500, 500];
			this.blocks = [
				new Block(-300, 0, 150, 80),
				new Block(150, 0, 150, 80),
				new Block(50, 130, 50, 50),
				new Block(-100, 130, 50, 50),
				new Block(-500, 200, 200, 50),
				new Block(300, 200, 200, 50),
				new Block(-100, -150, 200, 50)
			];
		}
		Music.main = this.music;
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
		/*if(keys[90]) {
			player[0].character = new Character(choochooPic);
		}*///debug
		if(attack[u].type === "seek") {//Choo Choo's attack
			var distance = 9999;
			for(var k = 0;k < player.length;k ++) {
				if(dist(player[k].x, player[k].y, player[i].x, player[i].y) < distance && k !== i && player[k].alive === true && player[k].character.pic !== undefined && !player[k].team.equals(player[i].team)) {
					distance = dist(player[k].x, player[k].y, player[i].x, player[i].y);
					attack[u].x = player[k].x - 5;
					attack[u].y = player[k].y - 5;
				}
			}
		}
		
		if(attack[u].type === "orb") {//Badeline
			var distance = 9999;
			for(var k = 0;k < player.length;k ++) {
				if(dist(player[k].x, player[k].y, player[i].x, player[i].y) < distance && k !== i && player[k].alive === true && player[k].character.pic !== undefined && !player[k].team.equals(player[i].team)) {
					distance = dist(player[k].x, player[k].y, player[i].x, player[i].y);
					attack[u].dir = atan2((player[k].y-10)-attack[u].y, (player[k].x-10)-attack[u].x);
				}
			}
			attack[u].y += 8*sin(attack[u].dir);
			attack[u].x += 8*cos(attack[u].dir);
		}
		
		if(attack[u].type === "fly") {
			player[i].jump = false;
			if(attack[u].time > 10) {
				if(attack[u].time % 40 === 0) {
					player[i].damage ++;
				}
				if(player[i].cpu) {//cpu
					if(cpuControls[i].up) {
						player[i].yVel -= max(1-(player[i].damage/200), .1);
					}
					if(cpuControls[i].down && !player[i].ground) {
						player[i].yVel += 1;
					}
					if(cpuControls[i].left) {
						player[i].xVel -= 1;
					}
					if(cpuControls[i].right) {
						player[i].xVel += 1;
					}
				} else {
					if(keys[controls[i].up]) {
						player[i].yVel -= max(1-(player[i].damage/200), .1);
					}
					if(keys[controls[i].down] && !player[i].ground) {
						player[i].yVel += 1;
					}
					if(keys[controls[i].left]) {
						player[i].xVel -= 1;
					}
					if(keys[controls[i].right]) {
						player[i].xVel += 1;
					}
				}
				player[i].yVel = constrain(player[i].yVel, -6, 6);
				player[i].xVel = constrain(player[i].xVel, -6, 6);
			}
		}
		
		if(attack[u].type === "zoom"){
			if(attack[u].dir === 1){
				player[i].xVel += 1;
				attack[u].x = player[i].x + 15;
				attack[u].y = player[i].y;
			}
			if(attack[u].dir === 2){
				player[i].xVel -= 1;
				attack[u].x = player[i].x - 55;
				attack[u].y = player[i].y;
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
		
		if(attack[u].type === "bow") {
			fill(255, 255, 0, 70);
			for(var p = 0;p < player[i].character.charge;p ++) {
				ellipse(player[i].x, player[i].y, 5*player[i].character.charge-5*p, 5*player[i].character.charge-5*p);
			}
			if(player[i].cpu) {
				if(attack[u].dir === 1) {
					if(cpuControls[i].special && attack[u].w === 0) {
						attack[u].damage = player[i].character.charge;
						attack[u].x = player[i].x + 15;
						attack[u].y = player[i].y;
						attack[u].time = 100;
						attack[u].w = 0;
						attack[u].h = 0;
						if(frameCount % 2 === 0 && player[i].character.charge < 10) {
							player[i].character.charge ++;
						}
					} else {
						attack[u].y += 1.5/player[i].character.charge * 80/attack[u].time;
						attack[u].x += player[i].character.charge*2;
						attack[u].w = 30;
						attack[u].h = 10;
					}
				}
				if(attack[u].dir === 2) {
					if(cpuControls[i].special && attack[u].w === 0) {
						attack[u].damage = player[i].character.charge;
						attack[u].x = player[i].x - 45;
						attack[u].y = player[i].y;
						attack[u].time = 100;
						attack[u].w = 0;
						attack[u].h = 0;
						if(frameCount % 2 === 0 && player[i].character.charge < 10) {
							player[i].character.charge ++;
						}
					} else {
						attack[u].y += 1.5/player[i].character.charge * 80/attack[u].time;
						attack[u].x -= player[i].character.charge*2;
						attack[u].w = 30;
						attack[u].h = 10;
					}
				}
			} else {
				if(attack[u].dir === 1) {
					if(keys[controls[i].special] && attack[u].w === 0) {
						attack[u].damage = player[i].character.charge;
						attack[u].x = player[i].x + 15;
						attack[u].y = player[i].y;
						attack[u].time = 100;
						attack[u].w = 0;
						attack[u].h = 0;
						if(frameCount % 2 === 0 && player[i].character.charge < 10) {
							player[i].character.charge ++;
						}
					} else {
						attack[u].y += 1.5/player[i].character.charge * 80/attack[u].time;
						attack[u].x += player[i].character.charge*2;
						attack[u].w = 30;
						attack[u].h = 10;
					}
				}
				if(attack[u].dir === 2) {
					if(keys[controls[i].special] && attack[u].w === 0) {
						attack[u].damage = player[i].character.charge;
						attack[u].x = player[i].x - 45;
						attack[u].y = player[i].y;
						attack[u].time = 100;
						attack[u].w = 0;
						attack[u].h = 0;
						if(frameCount % 2 === 0 && player[i].character.charge < 10) {
							player[i].character.charge ++;
						}
					} else {
						attack[u].y += 1.5/player[i].character.charge * 80/attack[u].time;
						attack[u].x -= player[i].character.charge*2;
						attack[u].w = 30;
						attack[u].h = 10;
					}
				}
			}
		}//link
		
		if(attack[u].type === "sword up jump") {
			attack[u].x = player[i].x - 5;
			attack[u].y = player[i].y - 60;
			player[i].yVel = -9;
			player[i].airSpecial = false;
		}//link

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
		
		if(attack[u].type === "jump choochoo") {
			player[i].yVel = -4;
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
		
		if(attack[u].type === "blaster") {
			if(attack[u].time < 100) {
				if(attack[u].dir === 1) {
					attack[u].w += 20;
				}
				if(attack[u].dir === 2) {
					attack[u].w += 20;
					attack[u].x -= 20;
				}
			}
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
			if(attack[u].damage < 5) {
				attack[u].damage ++;
			}
			player[i].airSpecial = false;
		}
	}
}

function drawAttack(u) {
	if(attack[u].type === "seek") {
		stroke(255, 40, 40);
		strokeWeight(10 + 3*sin(frameCount));
		line(player[attack[u].player].x, player[attack[u].player].y, attack[u].x, attack[u].y);
		noStroke();
	}
	if(attack[u].type === "blaster") {
		if(attack[u].time > 295) {
			blasterR.frame = 0;
			blasterL.frame = 0;
		}
		if(attack[u].dir === 1) {
			blasterR.draw(attack[u].x, attack[u].y + blasterR.height()/4);
			if(frameCount % 5 === 0 && blasterR.frame < 3) {
				blasterR.animate();
			}
		}
		if(attack[u].dir === 2) {
			blasterL.draw(attack[u].x + attack[u].w, attack[u].y + blasterL.height()/4);
			if(frameCount % 5 === 0 && blasterL.frame < 3) {
				blasterL.animate();
			}
		}
	}
}

function pierce(u) {
	switch(attack[u].type) {
		case "blaster":
			return false;
		case "seek":
			return false;
		default:
			return true;
	}
}
function Animation(dir, runFrame, fpr, right, up, left, down) {//w.i.p.
	this.dir = dir;
	this.runFrame = runFrame;
	this.fpr = fpr;
	this.right = right;
	this.up = up;
	this.left = left;
	this.down = down;
	
	this.reset = function() {
		this.runFrame = 0;
	}
	
	this.draw = function(x, y, width, height) {
		if(this.dir == 3) {
			for(var i = 0;i < this.down.length;i ++) {
				if(this.runFrame % this.fpr < this.fpr/this.down.length*(i+1) && this.runFrame % this.fpr >= this.fpr/this.down.length*i) {
					image(down[i], x, y, width, height);
				}
			}
		} else {
			if(this.dir == 1) {
				for(var i = 0;i < this.up.length;i ++) {
					if(this.runFrame % this.fpr < this.fpr/this.up.length*(i+1) && this.runFrame % this.fpr >= this.fpr/this.up.length*i) {
						image(up[i], x, y, width, height);
					}
				}
			} else {
				if(this.dir == 0) {
					for(var i = 0;i < this.right.length;i ++) {
						if(this.runFrame % this.fpr < this.fpr/this.right.length*(i+1) && this.runFrame % this.fpr >= this.fpr/this.right.length*i) {
							image(right[i], x, y, width, height);
						}
					}
				}else {
					if(this.dir == 2) {
						for(var i = 0;i < this.left.length;i ++) {
							if(this.runFrame % this.fpr < this.fpr/this.left.length*(i+1) && this.runFrame % this.fpr >= this.fpr/this.left.length*i) {
								image(left[i], x, y, width, height);
							}
						}
					}
				}
			}
		}
	}
	
	this.move = function(dir) {
		this.runFrame ++;
		this.dir = dir;
	}
}
var version = "0.1.5";//The version of the game
var pre = "Pre";//If the game is Pre, Alpha, Beta, etc.
var pictures = 76;//76 as of version 0.1.5 Pre

var developerMode = false;

//Animations
/*var quote;
var flowey;
var glitch;
var sans;
var ballos;
var fawful;
var link;*/
//Animations
//Animation images
var blaster0;
var blaster1;
var blaster2;
var blaster3;
var blaster4;
var blaster5;
var blaster6;
var blaster7;

var badeline0;
var badeline1;

var toad0;
var toad1;
var toad2;
var toad3;
var toad4;
var toad5;
var toad6;
var toad7;
var toad8;
var toad9;
var toad10;
var toad11;
var toad12;
var toad13;
var toad14;
var toad15;

var egadd1;
var egadd2;
var egadd3;
var egadd4;
var egadd5;
var egadd6;
var egadd7;
var egadd8;
var egadd9;
var egadd10;

var link0;
var link1
var link2;
var link3;

var quote0;
var quote1;
var quote3;
var quote4;
var quote5;
var quote7;

var sans0;
var sans1;
var sans2;
var sans3;

var fawful0;
var fawful1;
var fawful2;
var fawful3;
var fawful4;
var fawful5;
var fawful6;
var fawful7;

var glitch1;
var glitch2;
var glitch3;
//Animation images

var playersDown = 0;//Finds the amount of players not in the match
var winner;//Who won the last match
var winnerCount = 0;
var trans = {x: 0, y: 0, scale: 1, count: 0};
var playerNum = 1;
var keySelect = [false,0];
var menu = 3;//0: main menu, 1: settings, 2: character select, 3: intro, 4: actual battle
var arena = new Arena("Arena");//what arena you are in
var keys = [];
var fire = [];

var title;//images
var choochooPic;//choo choo
var badelinePic;
var quotePic;
var floweyPic;
var glitchPic;
var sansPic;
var balosPic;
var linkPic;
var fawfulPic;
var toadPic;
var egaddPic;
var randomPic;//images

var allPlayerStock = 3;//How much stock each player gets
var ai = new AI();
var slideX = [0,0];
var slideY = [0,0];
var loading = 0;
var picCount = 0;
var pause = false;
var choose = {
  place: true,
  p: [
		{
			x: 120,
			y: 380,
			follow: false
		},
		{
			x: 340,
			y: 380,
			follow: false
		},
		{
			x: 560,
			y: 380,
			follow: false
		},
		{
			x: 780,
			y: 380,
			follow: false
		}
	]
}
var controls = [
	new Controls(38, 37, 40, 39, 190, 188, 77, 32),
	new Controls(87, 65, 83, 68, 70, 71, 72, 32),
	new Controls(254, 254, 254, 254, 254, 254, 254, 254),
	new Controls(254, 254, 254, 254, 254, 254, 254, 254),
];
var cpuControls = [
	new Controls(false, false, false, false, false, false, false, false),
	new Controls(false, false, false, false, false, false, false, false),
	new Controls(false, false, false, false, false, false, false, false),
	new Controls(false, false, false, false, false, false, false, false)
];
function keyButton(x,y,inp){
  fill(70,70,70);//one button
  rect(x,y,100,100,10);
  fill(0,0,0);
  rect(x + 10,y + 10,80,80,10);//one button
  fill(255,255,255);
  textSize(18);
  text(keyCodes[inp],x + 50,y + 50);
}
function backButton(){
  textSize(45);
  fill(255,90,90);
  rect(800,0,100,100);
  fill(0,0,0);
  text("Back",850,50);
  if(mouseX > 800 && mouseY < 100 && mouseIsPressed){
    menu = 0;
    fire = [];
  }
}
function arenaBackButton(){
  textSize(45);
  fill(255,90,90);
  rect(0,0,100,100);
  fill(0,0,0);
  text("Back",50,50);
  if(mouseX < 100 && mouseY < 100 && mouseIsPressed){
    menu = 2;
  }
}
var attack = [
  {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    time: 0,
    player: 0,
    damage: 0,
    launch: 0
  }
];
var player = [
	new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, true, true, new Color(220, 130, 130), new Character(undefined)),
	new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, true, true, new Color(130, 130, 220), new Character(undefined)),
	new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, true, true, new Color(130, 220, 130), new Character(undefined)),
	new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, true, true, new Color(220, 130, 220), new Character(undefined))
];
var addPic = true;
var loadCounter = 0;
function loaded() {
	loadCounter ++;
	loading = floor(loadCounter/pictures * 100);
}

function setArena(i) {
	switch(i) {
		case 0:
			return "Classic";
		case 1:
			return "Arena";
		case 2:
			return "Castle";
		default:
			return "Classic";
	}
}

var hacked = false;
function hackLink() {
	hacked = true;
	console.log("Link is now invinsible >:)");
}
function Attack(pics) {
	this.frame = 0;
	this.pic = pics;
	
	this.height = function() {
		return this.pic[this.frame].height;
	}
	
	this.width = function() {
		return this.pic[this.frame].width;
	}
	
	this.animate = function() {
		this.frame ++;
		if(this.frame > this.pic.length-1) {
			this.frame = 0;
		}
	}
	
	this.draw = function(x, y) {
		image(this.pic[this.frame], x, y);
	}
	
	this.draw = function(x, y, width, height) {
		image(this.pic[this.frame], x, y, width, height);
	}
}
var keyCodes = [
  "",//0
  "",//1
  "",//2
  "break",//3
  "",//4
  "",//5
  "",//6
  "",//7
  "backspace",//8
  "tab",//9
  "",//10
  "",//11
  "clear",//12
  "enter",//13
  "",//14
  "",//15
  "shift",//16
  "ctrl",//17
  "alt",//18
  "pause/break",//19
  "caps\nlock",//20
  "",//21
  "",//22
  "",//23
  "",//24
  "",//25
  "",//26
  "escape",//27
  "conversion",//28
  "non-conversion",//29
  "",//30
  "",//31
  "spacebar",//32
  "page\nup",//33
  "page\ndown",//34
  "end",//35
  "home ",//36
  "left",//37
  "up",//36
  "right",//39
  "down",//40
  "select",//41
  "print",
  "execute",//43
  "Print\nScreen",
  "insert ",//45
  "delete",
  "",//47
  "0",//48
  "1",//49
  "2",
  "3",
  "4",//52
  "5",
  "6",
  "7",//55
  "8",
  "9",//57
  ":",
  ";",//59
  "<",//60
  "=",//61
  "",//62
  "ß",
  "@",//64
  "a",
  "b",//66
  "c",
  "d",//68
  "e",//69
  "f",
  "g",//71
  "h",
  "i",
  "j",//74
  "k",
  "l",//76
  "m",
  "n",//78
  "o",
  "p",//80
  "q",
  "r",//82
  "s",
  "t",//84
  "u",
  "v",//86
  "w",
  "x",//88
  "y",
  "z",//90
  "Left ⌘",//91
  "right\nwindow\nkey",
  "Right ⌘",//93
  "",//94
  "",//95
  "num\n0",
  "num\n1",//97
  "num\n2",
  "num\n3",//99
  "num\n4",
  "num\n5",//101
  "num\n6",
  "num\n7",//103
  "num\n8",
  "num\n9",//105
  "*",
  "+",//107
  "num\n.",
  "-",//109
  ".",
  "/",//111
  "f1",
  "f2",//113
  "f3",
  "f4",//115
  "f5",
  "f6",//117
  "f7",
  "f8",//119
  "f9",
  "f10",//121
  "f11",
  "f12",
  "f13",//124
  "f14",
  "f15",//126
  "f16",
  "f17",//128
  "f18",
  "f19",//130
  "f20",
  "f21",//132
  "f22",
  "f23",//134
  "f24",
  "",//136
  "",//137
  "",//138
  "",//139
  "",//140
  "",//141
  "",//142
  "",//143
  "num\nlock",//144
  "scroll\nlock",
  "",//146
  "",//147
  "",//148
  "",//149
  "",//150
  "",//151
  "",//152
  "",//153
  "",//154
  "",//155
  "",//156
  "",//157
  "",//158
  "",//159
  "^",
  "!",//161
  "#",
  "$",//163
  "ù",//164
  "page\nbackward",//165
  "page\nforward",//166
  "",//167
  "",//168
  ")",//169
  "*",//170
  "~ + * key",//171
  "",//172
  "mute/\nunmute",
  "decrease\nvolume\nlevel",//174
  "increase\nvolume\nlevel",
  "next",//176
  "previous",
  "stop",//178
  "play/\npause",
  "e-mail",//180
  "mute/\nunmute",
  "decrease\nvolume",//182
  "increase\nvolume",//183
  "",//184
  "",//185
  ";",//186
  "=",//187
  ",",
  "-",//189
  ".",
  "/",//191
  "`",//192
  "?",//193
  "num .",//194
  "",//195
  "",//196
  "",//197
  "",//198
  "",//199
  "",//200
  "",//201
  "",//202
  "",//203
  "",//204
  "",//205
  "",//206
  "",//207
  "",//208
  "",//209
  "",//210
  "",//211
  "",//212
  "",//213
  "",//214
  "",//215
  "",//216
  "",//217
  "",//218
  "[",//219
  "\\",//220
  "]",
  "'",//222
  "`",//223
  "⌘",//224
  "altgr",
  "< /git >",//226
  "",//227
  "",//228
  "",//229
  "GNOME",//230
  "ç",
  "",//232
  "XF86Forward",
  "XF86Back",//234
  "",
  "",//236
  "",
  "",//238
  "",
  "alphanumeric",//240
  "",
  "hiragana/katakana",//242
  "half-width/full-width",
  "kanji",//244
  "",//245
  "",//246
  "",
  "",//248
  "",
  "",//250
  "",//251
  "",//252
  "",//253
  "none",//254
  "toggle touchpad"//255
];
function Player(x, y, cpu, damage, xVel, yVel, look, dir, attacking, inv, alive, airSpecial, team, character) {
	this.x = x;//x value
  this.y = y;//y value
	this.shield = false;//If your shield is out
	this.ground = false;
	this.shieldNum = 200;//How much shield you have left
  this.cpu = cpu;//If you are a cpu
  this.damage = damage;//How much damage you have taken
  this.xVel = xVel;//x velocity
  this.yVel = yVel;//y velocity
  this.look = look;//0: neither 1: up 2: down
  this.dir = dir;//1: right 2: left
  this.attacking = attacking;//If you are attacking
  this.inv = inv;//How much invinsibility you have
	this.lives = allPlayerStock;//How many lives you have
	this.alive = alive;//If you are alive
	this.airSpecial = airSpecial;//Stops you from using special attack twice in the air
	this.team = team;//Should be a color for what team you are on
  this.character = character;//The character object
	this.difficulty = 9;//1-9 How hard cpus are
	
	this.width = function() {
		switch(this.character.pic) {
			case toadPic:
				return toadPic.width*2;
			case egaddPic:
				return egaddPic.width*2;
			case choochooPic:
				return 75;
			case badeline0:
				return 45;
			default:
				return 50;
		}
	}
	
	this.height = function() {
		switch(this.character.pic) {
			default:
				return 60;
		}
	}
	
	this.resetLives = function() {
		this.lives = allPlayerStock;
	}
	
	this.reset = function() {
		this.x = 0;//x value
		this.y = 0;//y value
		this.shield = false;//If your shield is out
		this.ground = false;
		this.shieldNum = 200;//How much shield you have left
		this.damage = 0;//How much damage you have taken
		this.xVel = 0;//x velocity
		this.yVel = 0;//y velocity
		this.look = 0;//0: neither 1: up 2: down
		this.dir = 1;//1: right 2: left
		this.attacking = false;//If you are attacking
		this.inv = 0;//How much invinsibility you have
		this.lives = allPlayerStock;//How many lives you have
		this.alive = true;//If you are alive
		this.character = new Character(undefined);
		this.airSpecial = false;//Stops you from using special attack twice in the air
	}
	
	this.name = function() {
		if(this.character.pic === quotePic) {
			return "Quote";
		}
		if(this.character.pic === choochooPic) {
			return "Choo Choo\n";
		}
		if(this.character.pic === egaddPic) {
			return "Professor\nE. Gadd";
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
		if(this.character.pic === linkPic) {
			return "Link";
		}
		if(this.character.pic === toadPic) {
			return "Toad";
		}
		if(this.character.pic === badelinePic) {
			return "Badeline";
		}
	}
}
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
			if(player[i].x > this.x-30 && player[i].x < this.x){
				player[i].xVel = -1.5;
			}
			if(player[i].x < this.x+this.width+30 && player[i].x > this.x+this.width){
				player[i].xVel = 1.5;
			}
		}
		if(player[i].y > this.y+this.height-30 && player[i].x > this.x-25 && player[i].x < this.x+this.width+25 && player[i].y < this.y+this.height+30){
			player[i].yVel = 2;
			player[i].y += player[i].yVel + 5;
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
			player[i].y += player[i].yVel + 5;
		}
	}
	
	this.draw = function() {
		fill(0);
		rect(this.x, this.y, this.width, this.height);
	}
}
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	
	this.fill = function() {
		fill(this.r, this.g, this.b);
	}
	
	this.stroke = function() {
		stroke(this.r, this.g, this.b);
	}
	
	this.equals = function(color) {
		if(this.r === color.r && this.g === color.g && this.b === color.b) {
			return true;
		} else {
			return false;
		}
	}
	
	this.nextColor = function() {
		if(this.r === 220 && this.g === 130 && this.b === 130) {
			/*this.r = 130;
			this.g = 130;
			this.b = 220;*/
			return new Color(130, 130, 220);
		}
		if(this.r === 130 && this.g === 130 && this.b === 220) {
			/*this.r = 130;
			this.g = 220;
			this.b = 130;*/
			return new Color(130, 220, 130);
		}
		if(this.r === 130 && this.g === 220 && this.b === 130) {
			/*this.r = 220;
			this.g = 130;
			this.b = 220;*/
			return new Color(220, 130, 220);
		}
		if(this.r === 220 && this.g === 130 && this.b === 220) {
			/*this.r = 220;
			this.g = 130;
			this.b = 130;*/
			return new Color(220, 130, 130);
		}
	}
}
function AI() {
	this.target = [0, 0, 0, 0];
	this.dist = [0, 0, 0, 0];
	
	this.calculate = function(i) {
		//AI tendencies
		this.dist[i] = 9999;
		for(var p = 0;p < player.length;p ++) {
			if(player[p].character.pic !== undefined && player[p].alive && !player[i].team.equals(player[p].team) && i !== p && dist(player[i].x, player[i].y, player[p].x, player[p].y) < this.dist[i]) {
				this.target[i] = p;
				this.dist[i] = dist(player[i].x, player[i].y, player[p].x, player[p].y);
			}
		}
		
		if(player[this.target[i]].x - player[i].x > 30) {//Go towards the player  //30 is before the change
			cpuControls[i].right = true;
		} else {
			cpuControls[i].right = false;
		}
		
		if(player[this.target[i]].x - player[i].x < -30) {//Go towards the player  //-30 is the before change
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
		
		if(dist(player[this.target[i]].x, player[this.target[i]].y, player[i].x, player[i].y) < player[i].character.range && random(0,1) > .4-(player[i].difficulty/10)) {//Attack when close
			cpuControls[i].attack = true;
		} else {
			cpuControls[i].attack = false;
		}
		
		if(player[i].y - player[this.target[i]].y > 100 && random(0,1) > .6-(player[i].difficulty/10)) {//Use special to go up to the player
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
		
		if(player[this.target[i]].y - player[i].y < -30) {//Jump up to the player
			cpuControls[i].up = true;
		} else {
			cpuControls[i].up = false;
		}
		
		if(player[this.target[i]].y > 300 || player[i].x < arena.bounds[0]+20 || player[i].x > arena.bounds[1]-20) {//Don't fall off the edge
			if(player[i].difficulty > 2) {
				cpuControls[i].left = false;
				cpuControls[i].right = false;
			}
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
		
		if(player[i].x < arena.bounds[0]+20 && player[i].difficulty > 1) {//Stays away from the edges
			cpuControls[i].right = true;
			cpuControls[i].left = false;
		}
		
		if(player[i].x > arena.bounds[1]-20 && player[i].difficulty > 1) {//Stays away from the edges
			cpuControls[i].right = false;
			cpuControls[i].left = true;
		}
		
		if(player[i].yVel > 8) {//jumps when going down too fast
			cpuControls[i].up = true;
		}
		
		if(player[i].yVel > 16 && random(0,1) > .9-(player[i].difficulty/10)) {//Special jumps when going down too fast
			cpuControls[i].up = true;
			cpuControls[i].special = true;
		}
		
		if(random(0,1) > .9-(player[i].difficulty/20) && cpuControls[i].attack && dist(player[i].x, player[i].y, player[this.target[i]].x, player[this.target[i]].y) < 40) {
			cpuControls[i].down = true;
			cpuControls[i].special = true;
			cpuControls[i].attack = false;
			cpuControls[i].up = false;
		} else {
			cpuControls[i].down = false;
		}
		
		for(var u = 0;u < attack.length;u ++) {
			if(attack[u].player !== i && random(0,1) > .9-(player[i].difficulty/10) && player[i].inv < 50 - 3*player[i].difficulty && !player[i].team.equals(player[attack[u].player].team)) {
				if(attack[u].x-10 + attack[u].w+20 > player[i].x - 25 && attack[u].x-10 < player[i].x + 25 && attack[u].y-10 + attack[u].h+20 > player[i].y-10 - 30 && attack[u].y-10 < player[i].y-10 + 30){
					cpuControls[i].shield = true;
				} else {
					cpuControls[i].shield = false;
				}
			} else {
				cpuControls[i].shield = false;
			}
		}
		
		if(attack.length < 1) {
			cpuControls[i].shield = false;
		}
	}
	
	this.run = function(i) {
		if(player[i].cpu) {
			if(player[i].character.pic !== undefined && player[i].alive){
				if(player[i].inv > 0){
					player[i].inv --;
				}
				
				addPic = true;
				for(var p = 0;p < i;p ++) {
					if(player[i].team.equals(player[p].team) && player[p].alive && player[p].character.pic !== undefined) {
						addPic = false;
					}
				}
				if(addPic) {//turns picCount into team count 
					teamCount ++;
				}
				picCount ++;
				
				if(player[i].inv < 1 || player[i].inv % 2 === 0){
					player[i].character.animation.draw(player[i].x, player[i].y, player[i].width(), player[i].height());
					//image(player[i].character.pic,player[i].x,player[i].y,50,60);
				}
				/*if(i === 0){
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
				}*/
				player[i].team.fill();
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
				
				if(player[i].y > 750 || player[i].x < -1000 || player[i].x > 1000 || player[i].y < -900){
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
				if(i === attack[u].player) {
					attack[u].time -= 4;
					rect(attack[u].x,attack[u].y,attack[u].w,attack[u].h);
					drawAttack(u);
				}
				//rect(attack[u].x,attack[u].y,attack[u].w,attack[u].h);
				if(attack[u].x + attack[u].w > player[i].x - 25 && attack[u].x < player[i].x + 25 && attack[u].y + attack[u].h > player[i].y - 30 && attack[u].y < player[i].y + 30){
					if(player[i].x >= attack[u].x + attack[u].w/2 && i !== attack[u].player && !player[i].team.equals(player[attack[u].player].team)){
						if(player[i].inv < 1 && (attack[u].w !== 0 && attack[u].h !== 0)){
							if(!player[i].shield) {
								player[i].damage += attack[u].damage;
								player[i].xVel += player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/2;
								player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/2;
							} else {
								player[i].damage += ceil(attack[u].damage / 3);
								player[i].shieldNum -= 3 * attack[u].damage;
								player[i].xVel += player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/5;
								player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/5;
							}
							if(pierce(u)) {
								attack[u].time = 0;
							}
							player[i].inv = player[attack[u].player].character.inv;
						}
					}else{
						if(player[i].x < attack[u].x + attack[u].w/2 && i !== attack[u].player && !player[i].team.equals(player[attack[u].player].team)){
							if(player[i].inv < 1 && (attack[u].w !== 0 && attack[u].h !== 0)){
								if(!player[i].shield) {
									player[i].damage += attack[u].damage;
									player[i].xVel -= player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/2;
									player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/2;
								} else {
									player[i].damage += ceil(attack[u].damage / 3);
									player[i].shieldNum -= 3 * attack[u].damage;
									player[i].xVel -= player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/5;
									player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/5;
								}
								if(pierce(u)) {
									attack[u].time = 0;
								}
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
function Controls(up, left, down, right, attack, special, shield, pause) {
	this.up = up;
	this.left = left;
	this.down = down;
	this.right = right;
	this.attack = attack;
	this.special = special;
	this.shield = shield;
	this.pause = pause;
}
function setup() {
  createCanvas(900,500);
	
	noSmooth();
	//IMPORTANT: Whenever you add new loads, add one to var pictures in Vars.js
	if(!developerMode) {
		Music.intro = loadSound("Intro.mp3", loaded);
		Music.theme = loadSound("Theme.mp3", loaded);
	}
	
	choochooPic = loadImage("choochoo.png", loaded);
	
  title = loadImage("Title.png", loaded);
  fawfulPic = loadImage("Fawful.png", loaded);
  quotePic = loadImage("Quote.png", loaded);
  floweyPic = loadImage("Flowey.png", loaded);
  sansPic = loadImage("sans.png", loaded);
  balosPic = loadImage("balos.png", loaded);
	linkPic = loadImage("link.png", loaded);
	badelinePic = loadImage("badeline0.png", loaded);
	randomPic = loadImage("random.png", loaded);
	
	badeline0 = loadImage("badeline0.png", loaded);//Badeline
	badeline1 = loadImage("badeline1.png", loaded);//Badeline
	
	blaster0 = loadImage("blaster0.png", loaded);//gaster blasters
	blaster1 = loadImage("blaster1.png", loaded);
	blaster2 = loadImage("blaster2.png", loaded);
	blaster3 = loadImage("blaster3.png", loaded);
	blaster4 = loadImage("blaster4.png", loaded);
	blaster5 = loadImage("blaster5.png", loaded);
	blaster6 = loadImage("blaster6.png", loaded);
	blaster7 = loadImage("blaster7.png", loaded);
	
	egaddPic = loadImage("egadd.png", loaded);//egadd frames
	egadd1 = loadImage("egadd01.png", loaded);
	egadd2 = loadImage("egadd02.png", loaded);
	egadd3 = loadImage("egadd03.png", loaded);
	egadd4 = loadImage("egadd04.png", loaded);
	egadd5 = loadImage("egadd05.png", loaded);
	egadd6 = loadImage("egadd06.png", loaded);
	egadd7 = loadImage("egadd07.png", loaded);
	egadd8 = loadImage("egadd08.png", loaded);
	egadd9 = loadImage("egadd09.png", loaded);
	egadd10 = loadImage("egadd10.png", loaded);
	
	toadPic = loadImage("toad.png", loaded);//toad frames
	toad0 = loadImage("toad0.png", loaded);
	toad1 = loadImage("toad1.png", loaded);
	toad2 = loadImage("toad2.png", loaded);
	toad3 = loadImage("toad3.png", loaded);
	toad4 = loadImage("toad4.png", loaded);
	toad5 = loadImage("toad5.png", loaded);
	toad6 = loadImage("toad6.png", loaded);
	toad7 = loadImage("toad7.png", loaded);
	toad8 = loadImage("toad8.png", loaded);
	toad9 = loadImage("toad9.png", loaded);
	toad10 = loadImage("toad10.png", loaded);
	toad11 = loadImage("toad11.png", loaded);
	toad12 = loadImage("toad12.png", loaded);
	toad13 = loadImage("toad13.png", loaded);
	toad14 = loadImage("toad14.png", loaded);
	toad15 = loadImage("toad15.png", loaded);//toad frames
	
	glitchPic = loadImage("Glitch.png", loaded);//glitch frames
	glitch1 = loadImage("glitch1.png", loaded);//glitch frames
	glitch2 = loadImage("glitch2.png", loaded);//glitch frames
	glitch3 = loadImage("glitch3.png", loaded);//glitch frames	
	
	link0 = loadImage("link0.png", loaded);//link frames
	link1 = loadImage("link1.png", loaded);//link frames
	link2 = loadImage("link2.png", loaded);//link frames
	link3 = loadImage("link3.png", loaded);//link frames
	
	quote0 = loadImage("quote0.png", loaded);//quote frames
	quote1 = loadImage("quote1.png", loaded);//quote frames
	quote3 = loadImage("quote3.png", loaded);//quote frames
	
	quote4 = loadImage("quote4.png", loaded);//quote frames
	quote5 = loadImage("quote5.png", loaded);//quote frames
	quote7 = loadImage("quote7.png", loaded);//quote frames
	
	sans0 = loadImage("sans0.png", loaded);//sans frames
	sans1 = loadImage("sans1.png", loaded);//sans frames
	
	sans2 = loadImage("sans2.png", loaded);//sans frames
	sans3 = loadImage("sans3.png", loaded);//sans frames
	
	fawful0 = loadImage("fawful0.png", loaded);//fawful frames
	fawful1 = loadImage("fawful1.png", loaded);//fawful frames
	fawful2 = loadImage("fawful2.png", loaded);//fawful frames
	fawful3 = loadImage("fawful3.png", loaded);//fawful frames
	
	fawful4 = loadImage("fawful4.png", loaded);//fawful frames
	fawful5 = loadImage("fawful5.png", loaded);//fawful frames
	fawful6 = loadImage("fawful6.png", loaded);//fawful frames
	fawful7 = loadImage("fawful7.png", loaded);//fawful frames
}

function draw() {
  angleMode(DEGREES);
  background(0,0,0);
  textAlign(CENTER,CENTER);
  if(menu === 3){//intro
		if(developerMode) {
			menu = 0;
		}
		if(keys[68] && keys[69] && keys[86] && mouseIsPressed) {
			developerMode = true;
			Music.main = emptyMusic;
			Music.intro = emptyMusic;
			Music.theme = emptyMusic;
		}
		blasterR = new Attack([blaster0, blaster1, blaster2, blaster3]);
		blasterL = new Attack([blaster4, blaster5, blaster6, blaster7]);
    push();
    translate(850,450);
    push();
    rotate(frameCount*2);
    fill(255,255,255);
    ellipse(0,0,100,100);
    fill(0,0,0);
    rect(-50,10,100,10);
    rect(-30,-50,20,100);
    pop();
    pop();
    textSize(40);
    fill(255,255,255);
    textAlign(LEFT);
    if(loading > 100){
      loading = 100;
    }
		//anim.draw(100,100,50,60);//Animation example
		//anim.move(2);//Animation example
    text("Loading...".substring(0,7+((frameCount/10) % 4)),500,450);
    text(loading+"%",700,450);
    textAlign(CENTER,CENTER);
    if(loading >= 100){
      menu = 0;
			Music.intro.play();
    }
  }//Intro
	if(menu === 0 || menu === 1 || menu === 2 || menu === 6) {
		if(!Music.theme.isPlaying() && !Music.intro.isPlaying()) {
			Music.theme.loop();
		}
	}
  if(menu === 0){//main menu
    noStroke();
    for(var i = 0;i < fire.length;i ++){
      fill(200,70 + random(-50,50),50,100);
      triangle(fire[i][0] + random(-10,10),fire[i][1] + random(-10,10),fire[i][2] + random(-10,10),fire[i][3] + random(-10,10),fire[i][4] + random(-10,10),fire[i][5] + random(-10,10));
      fire[i][0] += random(2,5);
      fire[i][1] -= random(2,5);
      fire[i][2] += random(2,5);
      fire[i][3] -= random(2,5);
      fire[i][4] += random(2,5);
      fire[i][5] -= random(2,5);
      if(fire[i][5] < 0 || fire[i][4] < 0 || fire[i][3] < 0 || fire[i][2] < 0 || fire[i][1] < 0 || fire[i][0] < 0){
        fire.splice(i,1);
      }
    }
    if((frameCount % 30) % 3 <= 1){
      fire.push([random(0,600),random(200,500),random(0,600),random(200,500),random(0,600),random(200,500)]);
    }
    image(title,0,0);
    push();
    translate(-300 + slideX[0],0 + slideY[0]);
    fill(230,40,40);
    ellipse(400,350,100,100);
    rect(400,300,150,100);
    fill(250,40,40);
    ellipse(400,350,80,80);
    rect(400,310,140,80);
    noFill();
    stroke(230,20,20);
    strokeWeight(5);
    arc(400,350,70,70,210,260);
    fill(0,0,0,150);
    noStroke();
    textSize(60);
    text("Fight!",455,350);
    pop();
    if(dist(mouseX,mouseY,100,350) < 50 || (mouseX > 100 && mouseX < 250 && mouseY > 300 && mouseY < 400)){
      slideX[0] = (mouseX-pmouseX)/2;
      slideY[0] = (mouseY-pmouseY)/2;
    }else{
      slideY[0] = 0;
      slideX[0] = 0;
    }
    if(dist(mouseX,mouseY,700,350) < 50 || (mouseX > 700 && mouseX < 850 && mouseY > 300 && mouseY < 400)){
      slideX[1] = (mouseX-pmouseX)/2;
      slideY[1] = (mouseY-pmouseY)/2;
    }else{
      slideY[1] = 0;
      slideX[1] = 0;
    }
		push();
    translate(300 + slideX[1],0 + slideY[1]);
    fill(230,40,40);
    ellipse(400,350,100,100);
    rect(400,300,150,100);
    fill(250,40,40);
    ellipse(400,350,80,80);
    rect(400,310,140,80);
    noFill();
    stroke(230,20,20);
    strokeWeight(5);
    arc(400,350,70,70,210,260);
    fill(0,0,0,150);
    noStroke();
    textSize(45);
    text("Settings",455,350);
    pop();    
    fill(255,255,255);
    textSize(35);
    text("Version " + version + " " + pre,450,350);
    textSize(20);
    text("All characters belong to Nintendo, Studio Pixel, or Toby Fox",450,480);
  }//Main menu
  if(menu === 1){//settings
    noStroke();
    backButton();
    fill(50,50,50);
    rect(0,((playerNum-1)*133)-10,72,120);
    rect(0,0,62,100);
    rect(0,133,62,100);
    rect(0,266,62,100);
    rect(0,400,62,100);
    textSize(50);
    fill(220,130,130);
    text("P1",31,50);
    fill(130,130,220);
    text("P2",31,183);
    fill(130,220,130);
    text("P3",31,316);
    fill(220,130,220);
    text("P4",31,450);
    fill(30,150,70);
    textSize(130);
    text("Settings",450,100);
    if(keySelect[0] === false){
      if(mouseX < 62 && mouseY > 0 && mouseY < 100 && mouseIsPressed){
        playerNum = 1;
      }
      if(mouseX < 62 && mouseY > 133 && mouseY < 233 && mouseIsPressed){
        playerNum = 2;
      }
      if(mouseX < 62 && mouseY > 266 && mouseY < 366 && mouseIsPressed){
        playerNum = 3;
      }
      if(mouseX < 62 && mouseY > 400 && mouseY < 500 && mouseIsPressed){
        playerNum = 4;
      }
    }
		
		//CPU difficulty
		textSize(30);
		fill(255);
		text("CPU difficulty: " + player[playerNum-1].difficulty,580, 450);
		fill(90);
		rect(534, 469, 92, 12);
		for(var z = 0;z < 10;z ++) {
			if(player[playerNum-1].difficulty > z) {
				fill(75 + 20*z, 180 - 20*z, 100 - 10*z);
				rect(z*10+535, 470, 10, 10);
			}
			if(mouseX > z*10+525 && mouseX < z*10+535 && mouseY > 470 && mouseY < 480 && mouseIsPressed && z !== 0) {
				player[playerNum-1].difficulty = z;
			}
		}
		
    //player controls
    textSize(25);
    fill(255,255,255);
    text("Up",250,170);
    text("Left",140,440);
    text("Down",250,440);
    text("Right",360,440);
    text("Attack",470,220);
    text("Special",580,220);
    text("Shield",690,220);
    text("Pause",800,220);
    keyButton(200,200,controls[playerNum-1].up);//button
    keyButton(200,310,controls[playerNum-1].down);
    keyButton(90,310,controls[playerNum-1].left);
    keyButton(310,310,controls[playerNum-1].right);
    keyButton(420,250,controls[playerNum-1].attack);//button
    keyButton(530,250,controls[playerNum-1].special);
    keyButton(640,250,controls[playerNum-1].shield);
    keyButton(750,250,controls[playerNum-1].pause);
    if(mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300 && mouseIsPressed){
      keySelect = [true,0];
    }
    if(mouseX > 90 && mouseX < 190 && mouseY > 310 && mouseY < 410 && mouseIsPressed){
      keySelect = [true,1];
    }
    if(mouseX > 200 && mouseX < 300 && mouseY > 310 && mouseY < 410 && mouseIsPressed){
      keySelect = [true,2];
    }
    if(mouseX > 310 && mouseX < 410 && mouseY > 310 && mouseY < 410 && mouseIsPressed){
      keySelect = [true,3];
    }
    if(mouseX > 420 && mouseX < 520 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
      keySelect = [true,4];
    }
    if(mouseX > 530 && mouseX < 630 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
      keySelect = [true,5];
    }
    if(mouseX > 640 && mouseX < 740 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
      keySelect = [true,6];
    }
    if(mouseX > 750 && mouseX < 850 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
      keySelect = [true,7];
    }
    if(keySelect[0] === true){
      fill(0,0,0,90);
      rect(0,0,900,500);
      fill(255,255,255);
      text("Type any key\n(Escape to cancel)",450,250);
    }
  }//Settings
  if(menu === 2){//character select
    backButton();
		
		//Lives
		fill(200, 100, 100, 150);
		rect(15, 45, 200, 40);
		fill(255);
		textSize(30);
		text("Lives: "+allPlayerStock, 120, 65);
		triangle(30, 55, 30, 75, 20, 65);
		triangle(200, 55, 200, 75, 210, 65);
		
    fill(90,90,90);
    for(var i = 0;i < 15;i ++){
      rect((i % 5)*90 + 230,(i % 3)*90,80,80,10);
    }
    image(fawfulPic,237,5,67,72);
    image(quotePic,325,2);
    image(floweyPic,411,1,78,78);
    image(glitchPic,501,1,78,78);
    image(sansPic,591,1,78,78);
    image(balosPic,231,91,78,78);
		image(linkPic,321,91,78,78);
		image(randomPic, 411, 91, 78, 78);
		image(toadPic, 501, 91, 78, 78);
		image(egaddPic, 601, 91, 58, 78);
		image(badeline0, 241, 181, 58, 78);
    
    /*if(choose.one.x > 230 && choose.one.x < 310 && choose.one.y < 80){
      player[0].character = new Character(fawfulPic);
    }else{
      if(choose.one.x > 320 && choose.one.x < 400 && choose.one.y < 80){
        player[0].character = new Character(quotePic);
      }else{
        if(choose.one.x > 410 && choose.one.x < 490 && choose.one.y < 80){
          player[0].character = new Character(floweyPic);
        }else{
          if(choose.one.x > 500 && choose.one.x < 580 && choose.one.y < 80){
            player[0].character = new Character(glitchPic);
          }else{
            if(choose.one.x > 590 && choose.one.x < 670 && choose.one.y < 80){
              player[0].character = new Character(sansPic);
	          }else{
              if(choose.one.x > 230 && choose.one.x < 310 && choose.one.y > 90 && choose.one.y < 170){
                player[0].character = new Character(balosPic);
              } else{
								if(choose.one.x > 320 && choose.one.x < 400 && choose.one.y > 90 && choose.one.y < 170){
									player[0].character = new Character(linkPic);
								} else {
									if(choose.one.x > 410 && choose.one.x < 490 && choose.one.y > 90 && choose.one.y < 170) {
										player[0].character = new Character(randomPic);
									} else {
										if(choose.one.x > 501 && choose.one.x < 581 && choose.one.y > 90 && choose.one.y < 170) {
											player[0].character = new Character(toadPic);
										}
									}
								}
							}
            }
          }
        }
      }
    }
    
    if(choose.two.x > 230 && choose.two.x < 310 && choose.two.y < 80){
      player[1].character = new Character(fawfulPic);
    }else{
      if(choose.two.x > 320 && choose.two.x < 400 && choose.two.y < 80){
        player[1].character = new Character(quotePic);
      }else{
        if(choose.two.x > 410 && choose.two.x < 490 && choose.two.y < 80){
          player[1].character = new Character(floweyPic);
        }else{
          if(choose.two.x > 500 && choose.two.x < 580 && choose.two.y < 80){
            player[1].character = new Character(glitchPic);
          }else{
            if(choose.two.x > 590 && choose.two.x < 670 && choose.two.y < 80){
              player[1].character = new Character(sansPic);
            }else{
              if(choose.two.x > 230 && choose.two.x < 310 && choose.two.y > 90 && choose.two.y < 170){
                player[1].character = new Character(balosPic);
              } else{
								if(choose.two.x > 320 && choose.two.x < 400 && choose.two.y > 90 && choose.two.y < 170){
									player[1].character = new Character(linkPic);
								} else {
									if(choose.two.x > 410 && choose.two.x < 490 && choose.two.y > 90 && choose.two.y < 170) {
										player[1].character = new Character(randomPic);
									} else {
										if(choose.two.x > 501 && choose.two.x < 581 && choose.two.y > 90 && choose.two.y < 170) {
											player[1].character = new Character(toadPic);
										}
									}
								}
							}
            }
          }
        }
      }
    }
    
    if(choose.three.x > 230 && choose.three.x < 310 && choose.three.y < 80){
      player[2].character = new Character(fawfulPic);
    }else{
      if(choose.three.x > 320 && choose.three.x < 400 && choose.three.y < 80){
        player[2].character = new Character(quotePic);
      }else{
        if(choose.three.x > 410 && choose.three.x < 490 && choose.three.y < 80){
          player[2].character = new Character(floweyPic);
        }else{
          if(choose.three.x > 500 && choose.three.x < 580 && choose.three.y < 80){
            player[2].character = new Character(glitchPic);
          }else{
            if(choose.three.x > 590 && choose.three.x < 670 && choose.three.y < 80){
              player[2].character = new Character(sansPic);
            }else{
              if(choose.three.x > 230 && choose.three.x < 310 && choose.three.y > 90 && choose.three.y < 170){
                player[2].character = new Character(balosPic);
              } else{
								if(choose.three.x > 320 && choose.three.x < 400 && choose.three.y > 90 && choose.three.y < 170){
									player[2].character = new Character(linkPic);
								} else {
									if(choose.three.x > 410 && choose.three.x < 490 && choose.three.y > 90 && choose.three.y < 170) {
										player[2].character = new Character(randomPic);
									} else {
										if(choose.three.x > 501 && choose.three.x < 581 && choose.three.y > 90 && choose.three.y < 170) {
											player[2].character = new Character(toadPic);
										}
									}
								}
							}
            }
          }
        }
      }
    }
    
    if(choose.four.x > 230 && choose.four.x < 310 && choose.four.y < 80){
      player[3].character = new Character(fawfulPic);
    }else{
      if(choose.four.x > 320 && choose.four.x < 400 && choose.four.y < 80){
        player[3].character = new Character(quotePic);
      }else{
        if(choose.four.x > 410 && choose.four.x < 490 && choose.four.y < 80){
          player[3].character = new Character(floweyPic);
        }else{
          if(choose.four.x > 500 && choose.four.x < 580 && choose.four.y < 80){
            player[3].character = new Character(glitchPic);
          }else{
            if(choose.four.x > 590 && choose.four.x < 670 && choose.four.y < 80){
              player[3].character = new Character(sansPic);
            }else{
              if(choose.four.x > 230 && choose.four.x < 310 && choose.four.y > 90 && choose.four.y < 170){
                player[3].character = new Character(balosPic);
              } else{
								if(choose.four.x > 320 && choose.four.x < 400 && choose.four.y > 90 && choose.four.y < 170){
									player[3].character = new Character(linkPic);
								} else {
									if(choose.four.x > 410 && choose.four.x < 490 && choose.four.y > 90 && choose.four.y < 170) {
										player[3].character = new Character(randomPic);
									} else {
										if(choose.four.x > 501 && choose.four.x < 581 && choose.four.y > 90 && choose.four.y < 170) {
											player[3].character = new Character(toadPic);
										}
									}
								}
							}
            }
          }
        }
      }
    }*/
    rect(20,290,200,200,10);
    rect(240,290,200,200,10);
    rect(460,290,200,200,10);
    rect(680,290,200,200,10);
    picCount = 0;
    if(player[0].character.pic !== undefined){
      image(player[0].character.pic,21,291,198,198);
      picCount ++;
    }
    
    if(player[1].character.pic !== undefined){
      image(player[1].character.pic,241,291,198,198);
      picCount ++;
    }
    
    if(player[2].character.pic !== undefined){
      image(player[2].character.pic,461,291,198,198);
      picCount ++;
    }
    
    if(player[3].character.pic !== undefined){
      image(player[3].character.pic,681,291,198,198);
      picCount ++;
    }
    rect(20,440,200,150,10);
    rect(240,440,200,150,10);
    rect(460,440,200,150,10);
    rect(680,440,200,150,10);
    //fill(220,130,130);//team
		player[0].team.fill();
    textSize(30);
    if(player[0].cpu === false){
      text("Player 1",120,470);
    }else{
      text("CPU 1",120,470);
    }
    //fill(130,130,220);//team
		player[1].team.fill();
    if(player[1].cpu === false){
      text("Player 2",340,470);
    }else{
      text("CPU 2",340,470);
    }
    //fill(130,220,130);
		player[2].team.fill();
    if(player[2].cpu === false){
      text("Player 3",560,470);
    }else{
      text("CPU 3",560,470);
    }
    //fill(220,130,220);//team
		player[3].team.fill();
    if(player[3].cpu === false){
      text("Player 4",780,470);
    }else{
      text("CPU 4",780,470);
    }
		if(!mouseIsPressed) {
    	choose.place = false;
		}
    //fill(220,130,130);
		/*player[0].team.fill();
    ellipse(choose.one.x,choose.one.y,50,50);//
		fill(255);
		text(1, choose.one.x, choose.one.y);
    if(dist(mouseX,mouseY,choose.one.x,choose.one.y) < 25 && mouseIsPressed && choose.place === false){
			choose.one.follow = true;
      choose.place = true;
    }
		if(!mouseIsPressed) {
			choose.one.follow = false;
		}
		if(choose.one.follow) {
			choose.one.x = mouseX;
      choose.one.y = mouseY;
		}
    if(keys[controls[0].up]){
      choose.one.y -= 3;
    }
    if(keys[controls[0].down]){
      choose.one.y += 3;
    }
    if(keys[controls[0].left]){
      choose.one.x -= 3;
    }
    if(keys[controls[0].right]){
      choose.one.x += 3;
    }//
    choose.one.x = constrain(choose.one.x,25,875);
    choose.two.x = constrain(choose.two.x,25,875);
    choose.three.x = constrain(choose.three.x,25,875);
    choose.four.x = constrain(choose.four.x,25,875);
    choose.one.y = constrain(choose.one.y,25,475);
    choose.two.y = constrain(choose.two.y,25,475);
    choose.three.y = constrain(choose.three.y,25,475);
    choose.four.y = constrain(choose.four.y,25,475);
    //fill(130,130,220);
		player[1].team.fill();
    ellipse(choose.two.x,choose.two.y,50,50);//
		fill(255);
		text(2, choose.two.x, choose.two.y);
    if(dist(mouseX,mouseY,choose.two.x,choose.two.y) < 25 && mouseIsPressed && choose.place === false){
			choose.two.follow = true;
      choose.place = true;
    }
		if(!mouseIsPressed) {
			choose.two.follow = false;
		}
		if(choose.two.follow) {
			choose.two.x = mouseX;
      choose.two.y = mouseY;
		}
    if(keys[controls[1].up]){
      choose.two.y -= 3;
    }
    if(keys[controls[1].down]){
      choose.two.y += 3;
    }
    if(keys[controls[1].left]){
      choose.two.x -= 3;
    }
    if(keys[controls[1].right]){
      choose.two.x += 3;
    }//
    //fill(130,220,130);
		player[2].team.fill();
    ellipse(choose.three.x,choose.three.y,50,50);//
		fill(255);
		text(3, choose.three.x, choose.three.y);
    if(dist(mouseX,mouseY,choose.three.x,choose.three.y) < 25 && mouseIsPressed && choose.place === false){
			choose.three.follow = true;
      choose.place = true;
    }
		if(!mouseIsPressed) {
			choose.three.follow = false;
		}
		if(choose.three.follow) {
			choose.three.x = mouseX;
      choose.three.y = mouseY;
		}
    if(keys[controls[2].up]){
      choose.three.y -= 3;
    }
    if(keys[controls[2].down]){
      choose.three.y += 3;
    }
    if(keys[controls[2].left]){
      choose.three.x -= 3;
    }
    if(keys[controls[2].right]){
      choose.three.x += 3;
    }//
    //fill(220,130,220);
		player[3].team.fill();
    ellipse(choose.four.x,choose.four.y,50,50);//
		fill(255);
		text(4, choose.four.x, choose.four.y);
    if(dist(mouseX,mouseY,choose.four.x,choose.four.y) < 25 && mouseIsPressed && choose.place === false){
			choose.four.follow = true;
      choose.place = true;
    }
		if(!mouseIsPressed) {
			choose.four.follow = false;
		}
		if(choose.four.follow) {
			choose.four.x = mouseX;
      choose.four.y = mouseY;
		}
    if(keys[controls[3].up]){
      choose.four.y -= 3;
    }
    if(keys[controls[3].down]){
      choose.four.y += 3;
    }
    if(keys[controls[3].left]){
      choose.four.x -= 3;
    }
    if(keys[controls[3].right]){
      choose.four.x += 3;
    }*/
		for(var i = 0;i < choose.p.length;i ++) {
			player[i].team.fill();
			ellipse(choose.p[i].x,choose.p[i].y,50,50);//
			fill(255);
			text(i+1, choose.p[i].x, choose.p[i].y);
			if(dist(mouseX,mouseY,choose.p[i].x,choose.p[i].y) < 25 && mouseIsPressed && choose.place === false){
				choose.p[i].follow = true;
				choose.place = true;
			}
			if(!mouseIsPressed) {
				choose.p[i].follow = false;
			}
			if(choose.p[i].follow) {
				choose.p[i].x = mouseX;
				choose.p[i].y = mouseY;
			}
			if(keys[controls[i].up]){
				choose.p[i].y -= 3;
			}
			if(keys[controls[i].down]){
				choose.p[i].y += 3;
			}
			if(keys[controls[i].left]){
				choose.p[i].x -= 3;
			}
			if(keys[controls[i].right]){
				choose.p[i].x += 3;
			}//
			choose.p[i].x = constrain(choose.p[i].x, 25, 875);
			choose.p[i].y = constrain(choose.p[i].y, 25, 475);
			
			if(choose.p[i].x < 30 && choose.p[i].y < 30 && developerMode) {
				player[i].character = new Character(choochooPic);
			}

			if(choose.p[i].x > 230 && choose.p[i].x < 310 && choose.p[i].y < 80){
				player[i].character = new Character(fawfulPic);
			}else{
				if(choose.p[i].x > 320 && choose.p[i].x < 400 && choose.p[i].y < 80){
					player[i].character = new Character(quotePic);
				}else{
					if(choose.p[i].x > 410 && choose.p[i].x < 490 && choose.p[i].y < 80){
						player[i].character = new Character(floweyPic);
					}else{
						if(choose.p[i].x > 500 && choose.p[i].x < 580 && choose.p[i].y < 80){
							player[i].character = new Character(glitchPic);
						}else{
							if(choose.p[i].x > 590 && choose.p[i].x < 670 && choose.p[i].y < 80){
								player[i].character = new Character(sansPic);
							}else{
								if(choose.p[i].x > 230 && choose.p[i].x < 310 && choose.p[i].y > 90 && choose.p[i].y < 170){
									player[i].character = new Character(balosPic);
								} else{
									if(choose.p[i].x > 320 && choose.p[i].x < 400 && choose.p[i].y > 90 && choose.p[i].y < 170){
										player[i].character = new Character(linkPic);
									} else {
										if(choose.p[i].x > 410 && choose.p[i].x < 490 && choose.p[i].y > 90 && choose.p[i].y < 170) {
											player[i].character = new Character(randomPic);
										} else {
											if(choose.p[i].x > 500 && choose.p[i].x < 580 && choose.p[i].y > 90 && choose.p[i].y < 170) {
												player[i].character = new Character(toadPic);
											} else {
												if(choose.p[i].x > 590 && choose.p[i].x < 670 && choose.p[i].y > 90 && choose.p[i].y < 170) {
													player[i].character = new Character(egaddPic);
												} else {
													if(choose.p[i].x > 230 && choose.p[i].x < 310 && choose.p[i].y > 180 && choose.p[i].y < 260) {
														player[i].character = new Character(badelinePic);
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
    if(picCount > 1){
      fill(180,130,50,150);
      rect(0,220,900,60,5);
      fill(180,50,50,150);
      rect(10,225,880,50,5);
      fill(0,0,0,200);
      text("Press attack to start",450,250);
			/*teams = [player[0].team];*/
      for(var i = 0;i < player.length;i ++){
				/*for(var u = 0;u < teams.length;u ++) {
					if(!player[i].team.equals(teams[u]) && player[i].character.pic !== undefined) {
						teams.push(player[i].team);
					}
				}*/
        if(player[i].character.pic !== undefined && keys[controls[i].attack]/* && teams.length > 1*/){
          menu = 6;
					arena.formArena();
					for(var p = 0;p < player.length;p ++) {
						player[p].damage = 0;
						player[p].inv = 50;
						player[p].shieldNum = 200;
						player[p].x = arena.spawn[p].x;
						player[p].y = arena.spawn[p].y;
						player[p].yVel = 0;
						player[p].xVel = 0;
					}
        }
      }
    }
  }//Character select
  if(menu === 4){//actually in the battle
    fill(200);
    rect(-1,-1,902,502);
    if(pause === false){
			if(!Music.main.isPlaying()) {
				Music.main.loop();
			}
      trans.x = 0;
      trans.y = 0;
      trans.count = 0;
			for(var p = 0;p < player.length;p ++) {
				if(player[p].character.pic !== undefined && player[p].alive){
					trans.count ++;
					trans.x += player[p].x;
					trans.y += player[p].y;
					if(player[p].x > 350/trans.scale){
						trans.scale -= 0.008;
					}else {
						if(player[p].x < -350/trans.scale){
							trans.scale -= 0.008;
						}else {
							if(player[p].x < 100/trans.scale && player[p].x > -100/trans.scale){
								trans.scale += 0.002;
							}
						}
					}
				}
			}
			if(keys[27]) {
				pause = true;
			}
      push();
      translate(450 - (trans.x)/trans.count,250 - (trans.y)/(trans.count));
      push();
      scale(constrain(trans.scale*(9/10), 0.2, 1.5));
      arena.formArena();
      imageMode(CENTER);
			
			teamCount = 0;
      picCount = 0;
      for(var i = 0;i < player.length;i ++){
				if(!player[i].cpu) {
					if(player[i].character.pic !== undefined && player[i].alive){
						if(player[i].character.pic === linkPic && hacked) {
							player[i].damage = 0;
						}
						
						if(player[i].inv > 0){
							player[i].inv --;
						}
						
						addPic = true;
						for(var p = 0;p < i;p ++) {
							if(player[i].team.equals(player[p].team) && player[p].alive && player[p].character.pic !== undefined) {
								addPic = false;
							}
						}
						if(addPic) {//turns picCount into team count 
							teamCount ++;
						}
						picCount ++;
						
						if(player[i].inv < 1 || player[i].inv % 2 === 0){
							player[i].character.animation.draw(player[i].x, player[i].y, player[i].width(), player[i].height());//, 50, 60
							//image(player[i].character.pic,player[i].x,player[i].y,50,60);
						}
						/*if(i === 0){
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
						}*/
						player[i].team.fill();
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
						if(keys[controls[i].right] && player[i].attacking === false && player[i].xVel < 2.5 && !player[i].shield){
							player[i].xVel ++;
							player[i].dir = 1;
						}
						if(keys[controls[i].left] && player[i].attacking === false && player[i].xVel > -2.5 && !player[i].shield){
							player[i].xVel --;
							player[i].dir = 2;
						}
						
						if(player[i].dir === 1) {//Makes the animation face the same way as the character
							player[i].character.animation.dir = 0;
						}
						if(player[i].dir === 2) {//Makes the animation face the same way as the character
							player[i].character.animation.dir = 2;
						}
						
						if(keys[controls[i].up] && player[i].attacking === false && !player[i].shield){
							player[i].look = 1;
						}
						if(keys[controls[i].down] && player[i].attacking === false && !player[i].shield){
							player[i].look = 2;
						}
						if(!keys[controls[i].down] && !keys[controls[i].up]) {
							player[i].look = 0;
						}

						if(keys[controls[i].shield] && player[i].shieldNum > 40) {
							player[i].shield = true;
						}

						if(player[i].shield && frameCount % 2 === 0) {
							player[i].shieldNum --;
						}

						if(!keys[controls[i].shield] || player[i].shieldNum <= 0) {
							player[i].shield = false;
						}

						if(!player[i].shield && player[i].shieldNum < 200 && frameCount % 3 === 0) {
							player[i].shieldNum ++;
						}

						if(keys[controls[i].left]) {
							if(!player[i].shield) {
								player[i].character.animation.move(2);
							}
						} else {
							if(keys[controls[i].right] && !player[i].shield) {
								player[i].character.animation.move(0);
							}
						}

						if(!keys[controls[i].left] && !keys[controls[i].right]) {
							player[i].character.animation.reset();
						}

						if(player[i].shield) {
							player[i].character.animation.reset();
						}

						if(keys[controls[i].pause]){
							pause = true;
						}

						arena.collide(i);
						if(!player[i].ground) {
							player[i].yVel += 0.4;
						}
						//collisions with the world
						/*if(!(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225)){
							if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
								player[i].yVel = -7;
								player[i].jump = false;
							}
						}
						if(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225){
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
						if(player[i].y > 750 || player[i].x < -1000 || player[i].x > 1000 || player[i].y < -900){
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
						if(keys[controls[i].attack] && !player[i].attacking && !player[i].shield){
							player[i].character.attack(i);
						}
						if(keys[controls[i].special] && !player[i].attacking && !player[i].shield) {
							player[i].character.special(i);
						}
						for(var u = 0;u < attack.length;u ++){
							if(i === attack[u].player){
								player[i].attacking = true;
							}
							fill(0,0,0);
							if(attack[u].player === i) {
								attack[u].time -= 4;
								rect(attack[u].x,attack[u].y,attack[u].w,attack[u].h);
								drawAttack(u);
							}
							if(attack[u].x + attack[u].w > player[i].x - 25 && attack[u].x < player[i].x + 25 && attack[u].y + attack[u].h > player[i].y - 30 && attack[u].y < player[i].y + 30){
								if(player[i].x >= attack[u].x + attack[u].w/2 && i !== attack[u].player && !player[i].team.equals(player[attack[u].player].team)){
									if(player[i].inv < 1 && (attack[u].w !== 0 && attack[u].h !== 0)){
										if(!player[i].shield) {
											player[i].damage += attack[u].damage;
											player[i].xVel += player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/2;
											player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/2;
										} else {
											player[i].damage += ceil(attack[u].damage / 3);
											player[i].shieldNum -= 3 * attack[u].damage;
											player[i].xVel += player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/5;
											player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/5;
										}
										if(pierce(u)) {
											attack[u].time = 0;
										}
										player[i].inv = player[attack[u].player].character.inv;
									}
								}else{
									if(player[i].x < attack[u].x + attack[u].w/2 && i !== attack[u].player && !player[i].team.equals(player[attack[u].player].team)){
										if(player[i].inv < 1 && (attack[u].w !== 0 && attack[u].h !== 0)){
											if(!player[i].shield) {
												player[i].damage += attack[u].damage;
												player[i].xVel -= player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/2;
												player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/2;
											} else {
												player[i].damage += ceil(attack[u].damage / 3);
												player[i].shieldNum -= 3 * attack[u].damage;
												player[i].xVel -= player[i].damage *(3/2)* attack[u].launch * player[i].character.launch/5;
												player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/5;
											}
											if(pierce(u)) {
												attack[u].time = 0;
											}
											player[i].inv = player[attack[u].player].character.inv;
										}
									}
								}
							}
							
							playAttack(u, i);//Runs the attacks

							if(attack[u].time <= 0){
								player[attack[u].player].attacking = false;
								attack.splice(u,1);
							}
						}
					}
				}//!cpu if statement
				if(player[i].cpu && player[i].alive) {
					ai.run(i);
					ai.calculate(i);
				}//cpu
      }
      imageMode(CORNERS);
      pop();
      pop();
      
      textSize(18);
			playersDown = 0;
      for(var i = 0;i < player.length;i ++){
				if(player[i].character.pic != undefined && player[i].alive) {
					/*if(i === 0){
						fill(220,130,130,200);
					}
					if(i === 1){
						fill(130,130,220,200);
					}
					if(i === 2){
						fill(130,220,130,200);
					}
					if(i === 3){
						fill(220,130,220,200);
					}*/
					player[i].team.fill();
					rect((i-playersDown) * 900/picCount,450,900/picCount,50,10);
					fill(50 + (player[i].damage * 2),50 - player[i].damage,50 - player[i].damage,200);
					if(!player[i].cpu) {
						text("Player " + (i + 1),(i-playersDown) * 900/picCount + (900/picCount)/2,460);
					} else {
						text("CPU " + (i + 1),(i-playersDown) * 900/picCount + (900/picCount)/2,460);
					}
					text(round(player[i].damage) + "%",(i-playersDown) * 900/picCount + (900/picCount)/2,475);
					text("Lives " + player[i].lives,(i-playersDown) * 900/picCount + (900/picCount)/2,490);
				} else {
					playersDown ++;
				}
      }
			if(teamCount <= 1) {
				menu = 5;
				for(var i = 0;i < player.length;i ++) {
					if(player[i].alive && player[i].character.pic != undefined) {
						winner = player[i].team;
					}
				}
			}
    }
    if(pause === true){
			if(Music.main.isPlaying) {
				Music.main.stop();
			}
      fill(100,100,100,200);
      ellipse(350,350,100,100);
      ellipse(550,350,100,100);
      fill(50,50,50,230);
      textSize(70);
      text("Paused",450,200);
      textSize(20);
      text("Exit",350,350);
      text("Unpause",550,350);
      if(dist(mouseX,mouseY,350,350) <= 50 && mouseIsPressed){
        pause = false;
        menu = 0;
				fire = [];
      }
      if(dist(mouseX,mouseY,550,350) <= 50 && mouseIsPressed){
        pause = false;
      }
    }
  }//In battle
	if(menu === 5){//After a battle
		background(0);
		textSize(20);
		fill(255, 255, 255);
		winnerCount = 0;
		for(var i = 0;i < player.length;i ++) {
			if(player[i].team.equals(winner)) {
				winnerCount ++;
			}
		}
		playersDown = 0;
		for(var i = 0;i < player.length;i ++) {
			if(player[i].team.equals(winner) && player[i].character.pic != undefined) {
				text(player[i].name() + " Wins!", 450+150*(i-playersDown)-75*(winnerCount-1), 100);
				if(!player[i].cpu) {
					text("Player " + (i+1), 450+150*(i-playersDown)-75*(winnerCount-1), 150);
				} else {
					text("CPU " + (i+1), 450+150*(i-playersDown)-75*(winnerCount-1), 150);
				}
				image(player[i].character.pic, 400+150*(i-playersDown)-75*(winnerCount-1), 190, 100, 120);
			} else {
				playersDown ++;
			}
		}
		playersDown = 0;
		for(var i = 0;i < player.length;i ++) {
			if(player[i].character.pic != undefined && !player[i].team.equals(winner)) {
				image(player[i].character.pic, 460 + 60*(i-playersDown), 330, 50, 60);
			} else {
				playersDown ++;
			}
		}
		textSize(25);
		text("Click to continue", 450, 400);
	}//After a battle
	if(menu === 6){
		arenaBackButton();
		
		for(var i = 0;i < 5;i ++) {
			for(var u = 0;u < 4;u ++) {
				fill(100);
				rect(265+i * 75, u * 75 + 50, 70, 70, 10);
				textSize(17);
				fill(255);
				text(setArena(5*u+i), 302+i*75, 87+u*75);
				if(mouseX > 265+i*75 && mouseX < 335+i*75 && mouseY > 50+u*75 && mouseY < 120+u*75) {
					arena = new Arena(setArena(5*u + i));
					if(mouseIsPressed) {
						menu = 4;
						Music.theme.stop();
						Music.intro.stop();
					}
				}
			}
		}
		
		fill(255);
		textSize(50);
		text("Arena: " + arena.name, 450, 400);
	}//Arena select
	//menu=6;
  /*stroke(255,255,255);
  line(450,0,450,500);//debug
  line(0,250,900,250);//debug
  noStroke();*/
  /*if(keys[controls[0].up]){
    background(50,50,100);
  }*/
  /*stroke(0,0,0);
  strokeWeight(2);
  line(0,0,0,500);
  line(0,500,900,500);
  line(900,500,900,0);
  strokeWeight(1);
  line(900,0,0,0);
  noStroke();*/
}

function mouseClicked(){
  if(menu === 2 && choose.place === false) {
		if(mouseX > 15 && mouseX < 55 && mouseY > 45 && mouseY < 85 && allPlayerStock > 1) {
			allPlayerStock --;
			for(var i = 0;i < player.length;i ++) {
				player[i].resetLives();
			}
		}
		if(mouseX > 175 && mouseX < 215 && mouseY > 45 && mouseY < 85 && allPlayerStock < 99) {
			allPlayerStock ++;
			for(var i = 0;i < player.length;i ++) {
				player[i].resetLives();
			}
		}
    if(mouseX > 20 && mouseX < 220 && mouseY > 290 && mouseY < 440){
      if(player[0].cpu === true){
        player[0].cpu = false;
      }else{
        player[0].cpu = true;
      }
    }
		if(mouseX > 20 && mouseX < 220 && mouseY > 440) {
			player[0].team = player[0].team.nextColor();
		}
    if(mouseX > 240 && mouseX < 440 && mouseY > 290 && mouseY < 440){
      if(player[1].cpu === true){
        player[1].cpu = false;
      }else{
        player[1].cpu = true;
      }
    }
		if(mouseX > 240 && mouseX < 440 && mouseY > 440) {
			player[1].team = player[1].team.nextColor();
		}
    if(mouseX > 460 && mouseX < 660 && mouseY > 290 && mouseY < 440){
      if(player[2].cpu === true){
        player[2].cpu = false;
      }else{
        player[2].cpu = true;
      }
    }
		if(mouseX > 460 && mouseX < 660 && mouseY > 440) {
			player[2].team = player[2].team.nextColor();
		}
    if(mouseX > 680 && mouseX < 880 && mouseY > 290 && mouseY < 440){
      if(player[3].cpu === true){
        player[3].cpu = false;
      }else{
        player[3].cpu = true;
      }
    }
		if(mouseX > 680 && mouseX < 880 && mouseY > 440) {
			player[3].team = player[3].team.nextColor();
		}
  }
  if(menu === 0) {//Main menu
    if(dist(mouseX,mouseY,700,350) < 50 || (mouseX > 700 && mouseX < 850 && mouseY > 300 && mouseY < 400)){
      menu = 1;
      playerNum = 1;
    }
    if(dist(mouseX,mouseY,100,350) < 50 || (mouseX > 100 && mouseX < 250 && mouseY > 300 && mouseY < 400)){
      menu = 2;
			for(var i = 0;i < player.length;i ++) {
				player[i].reset();
			}
      /*player = [
        new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
				new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
				new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
				new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined))
      ];*/
      choose = {
        place: true,
        p: [{
         x: 120,
         y: 380
        },
        {
          x: 340,
          y: 380
        },
        {
          x: 560,
          y: 380
        },
        {
          x: 780,
          y: 380
        }]
      }
    }
  }//Main menu
	if(menu === 5) {
		Music.intro.play();
		Music.theme.stop();
		menu = 0;
		fire = [];
	}//End of battle
}

function keyPressed(){
  keys[keyCode] = true;
}

function keyReleased(){
  keys[keyCode] = false;
  if(menu === 1){
    if(keySelect[0] === true){
      if(keySelect[1] === 0){
        controls[playerNum-1].up = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].up = 254;
        }
      }
      if(keySelect[1] === 1){
        controls[playerNum-1].left = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].left = 254;
        }
      }
      if(keySelect[1] === 2){
        controls[playerNum-1].down = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].down = 254;
        }
      }
      if(keySelect[1] === 3){
        controls[playerNum-1].right = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].right = 254;
        }
      }
      if(keySelect[1] === 4){
        controls[playerNum-1].attack = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].attack = 254;
        }
      }
      if(keySelect[1] === 5){
        controls[playerNum-1].special = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].special = 254;
        }
      }
      if(keySelect[1] === 6){
        controls[playerNum-1].shield = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].shield = 254;
        }
      }
      if(keySelect[1] === 7){
        controls[playerNum-1].pause = keyCode;
        if(keyCode === 27){
          controls[playerNum-1].pause = 254;
        }
      }
      keySelect[0] = false;
    }
  }
}
