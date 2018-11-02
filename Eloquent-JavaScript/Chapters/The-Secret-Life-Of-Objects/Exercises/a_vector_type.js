'use strict'

var Vec = {
  init : function(x, y) {
	this.x = x;
	this.y = y;
  },

  plus : function(x, y) {
	x = x + this.x;
	y = y + this.y;
	return {x, y};
  },

  minus : function(x, y) {
	x = x - this.x;
	y = y - this.y;
  },
  
  get length() {
	return (Math.sqrt((this.x * this.x + this.y * this.y)))  
  }
}

//console.log(new Vec(1, 2).plus(new Vec(2, 3)));
let vecObj = Object.create(Vec);

vecObj.init(1, 2);
console.log(vecObj.plus(2, 3));
