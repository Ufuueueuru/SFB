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
