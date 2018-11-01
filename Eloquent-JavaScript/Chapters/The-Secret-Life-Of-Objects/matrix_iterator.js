var Matrix = {
  init: function(width, height, element = (x, y) => undefined) {	// =>?, this
	this.width = width;
	this.height = height;
	this.content = [];

	for(let y = 0; y < height; y++) {
	  for(let x = 0; x < width; x++) {
		this.content[y * width + x] = element(x, y);  
	  }
	}
  },

  get: function(x, y) {	// getters and setters --> Needs Clarity
	return this.content[y * this.width + x];  
  },

  set: function(x, y, value) {
	this.content[y * this.width + x] = value;
  }
}

var MatrixIterator = {
  setup: function(matrix) {
	this.x = 0;
	this.y = 0;
	this.matrix = matrix;
  },

  [Symbol.iterator]: function() {	
	return this;
	//return new MatrixIterator(this);  //new? --> Object.create()
  },

  next: function() {
	if (this.y == this.matrix.height) return {done: true};

	let value = {
	  x: this.x,
	  y: this.y,
	  value: this.matrix.get(this.x, this.y)
	};
	this.x++;
	if (this.x == this.matrix.width) {
	  this.x = 0;
	  this.y++;
	}
	return {value, done: false};
  }
}

Object.setPrototypeOf(MatrixIterator, Matrix);

let matrix = Object.create(Matrix);

matrix.init(2, 2, (x, y) => `value ${x},${y}`);

let matrixIter = Object.create(MatrixIterator);

matrixIter.setup(matrix);

for (let {x, y, value} of matrixIter) {
  console.log(x, y, value);
}
