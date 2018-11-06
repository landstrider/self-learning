'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var ArrayRotation = {
  init : function(arr) {
	this.arr = arr;
  },

  promptUpdater : function() {
	rl.setPrompt(`Insert ${this.arr.length}th array Element> `);
	rl.prompt();
  },

  userInputOn : function() {
	return new Promise((resolve, reject) =>  {
		this.promptUpdater();
	  rl.on('line', (line) => {
		  if(line === "close") resolve(this.arr);
       	  else {
			this.arr.push(line);
       	 	this.promptUpdater();
		  }
		});
	 });
  },

  performArrRotation : function(userInputPromise) {
	userInputPromise
	  .then(() => {
  	    rl.close();
  	    console.log(this.arr);
  	  });
  }
}

let rotationTaskObj = Object.create(ArrayRotation);

rotationTaskObj.init([]);

let userInputPr = rotationTaskObj.userInputOn();

rotationTaskObj.performArrRotation(userInputPr);

//Clumsy Initial code
//var arr = [];
//
//function promptUpdater() {
//  rl.setPrompt(`Insert ${arr.length}th array Element> `);
//  rl.prompt();
//}
//
//function userInputOn() {
//  return new Promise(function(resolve, reject) {
//	promptUpdater();
//   	rl.on('line', function(line){
//      if(line === "close") resolve(arr);
//	  else {
//		arr.push(line);
//	  	promptUpdater();
//	  }
//    })
//  });
//}
//
//var userInputPr = userInputOn();
//
//function performArrRotation(userInputPromise) {
//  userInputPromise.then(
//	function() {
//	  rl.close();
//	  console.log(arr);
//	}  
//  );
//}
//
//performArrRotation(userInputPr);
