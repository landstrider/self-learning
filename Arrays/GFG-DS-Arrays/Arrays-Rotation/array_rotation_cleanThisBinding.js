'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var ArrayRotation = {
  init : function(arr, rotateBy) {
	this.arr = arr;
	this.rotateBy = rotateBy;
  },

  promptUpdater : function() {
	rl.setPrompt(`Insert ${this.arr.length}th array Element> `);
	rl.prompt();
  },

  userInputOn : function() {
	return new Promise(function(resolve, reject) {
  	  this.promptUpdater();
	  rl.on('line', function(line) {
		  if(line === "close") resolve(this.arr);
       	  else {
			this.arr.push(line);
       	 	this.promptUpdater();
		  }
		}.bind(this));
	 }.bind(this));
  },

  performArrRotation : function(userInputPromise) {
	userInputPromise.then(function() {
	  return new Promise(function(resolve, reject) {
		rl.question('By how many elements do you wish to rotate the array?',
		  function(answer) {
			this.rotateBy = answer;			  
			resolve(this.rotateBy);
		  }.bind(this));
	  }.bind(this));
  	}.bind(this))
	.then(function() {
  	  rl.close();
  	  console.log(this.arr, this.rotateBy);
	  let normalizedRotationVal = this.rotateBy % this.arr.length;
	  for(let i = 0; i < normalizedRotationVal; i++) {
		let unshiftedArrEl = this.arr.shift();
		this.arr.push(unshiftedArrEl);
	  }
	  console.log(this.arr);
	}.bind(this))
  }
}

let rotationTaskObj = Object.create(ArrayRotation);

rotationTaskObj.init([], 0);

let userInputPr = rotationTaskObj.userInputOn();

rotationTaskObj.performArrRotation(userInputPr);

