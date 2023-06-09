// Example violating the OCP

class Shape {
	constructor(type) {
		this.type = type;
	}

	calculateArea() {
		if (this.type === 'circle') {
			// Calculation logic for circle area
		} else if (this.type === 'rectangle') {
			// Calculation logic for rectangle area
		} else if (this.type === 'triangle') {
			// Calculation logic for triangle area
		}
	}
}

// Example following the OCP

class Shape {
	constructor(type) {
		this.type = type;
	}

	calculateArea() {
		// Default implementation does nothing
	}
}

//A better approach
class Circle extends Shape {
	constructor(radius) {
		super('circle');
		this.radius = radius;
	}

	calculateArea() {
		// Calculation logic for circle area
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super('rectangle');
		this.width = width;
		this.height = height;
	}

	calculateArea() {
		// Calculation logic for rectangle area
	}
}

class Triangle extends Shape {
	constructor(base, height) {
		super('triangle');
		this.base = base;
		this.height = height;
	}

	calculateArea() {
		// Calculation logic for triangle area
	}
}
