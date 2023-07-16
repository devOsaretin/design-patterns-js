// Interface
class Printable {
	print() {
		throw new Error('This method should be implemented by subclasses.');
	}
}

// Implementing multiple interfaces
class Document implements Printable {
	print() {
		console.log('Printing document...');
	}
}

class Photo implements Printable {
	print() {
		console.log('Printing photo...');
	}
}

// Another interface
class Scannable {
	scan() {
		throw new Error('This method should be implemented by subclasses.');
	}
}

// Implementing the specific interface
class DocumentScanner implements Scannable {
	scan() {
		console.log('Scanning document...');
	}
}

class PhotoScanner implements Scannable {
	scan() {
		console.log('Scanning photo...');
	}
}

// Client code
function printItem(item) {
	if (item instanceof Printable) {
		item.print();
	} else {
		throw new Error('Item is not printable.');
	}
}

function scanItem(item) {
	if (item instanceof Scannable) {
		item.scan();
	} else {
		throw new Error('Item is not scannable.');
	}
}

const document = new Document();
const photo = new Photo();
const documentScanner = new DocumentScanner();
const photoScanner = new PhotoScanner();

printItem(document); // Output: Printing document...
printItem(photo); // Output: Printing photo...

scanItem(documentScanner); // Output: Scanning document...
scanItem(photoScanner); // Output: Scanning photo...
