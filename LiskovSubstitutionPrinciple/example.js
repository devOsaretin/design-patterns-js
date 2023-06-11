class Shape {
	calculateArea() {
		// does nothing to be over-ridden by subclasses
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	calculateArea() {
		return this.width * this.height;
	}
}

class Square extends Shape {
	constructor(sideLength) {
		super();
		this.sideLength = sideLength;
	}

	calculateArea() {
		return this.sideLength * this.sideLength;
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	calculateArea() {
		return Math.PI * this.radius * this.radius;
	}
}

function printArea(shape) {
	console.log('Area:', shape.calculateArea());
}

const rectangle = new Rectangle(5, 3);
const square = new Square(4);
const circle = new Circle(3);

printArea(rectangle); // Output: Area: 15
printArea(square); // Output: Area: 16
printArea(circle); // Output: Area: 28.274333882308138
