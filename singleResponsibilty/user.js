// Example violating the SRP

class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	save() {
		// Code for saving the user to a database
	}

	sendEmail(message) {
		// Code for sending an email to the user
	}

	generateReport() {
		// Code for generating a report based on user data
	}
}

// Example following the SRP

class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

class UserRepository {
	save(user) {
		// Code for saving the user to a database
	}
}

class EmailService {
	sendEmail(user, message) {
		// Code for sending an email to the user
	}
}

class ReportGenerator {
	generateReport(user) {
		// Code for generating a report based on user data
	}
}
