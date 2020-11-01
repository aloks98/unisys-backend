const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
	assignmentId: {
		type: int,
		required: true,
	},
	assignmentName: {
		type: String,
		required: true,
	},
	grade: {
		type: String,
		required: true,
	},
	dateDue: {
		type: Date,
		required: true,
	},
	course: {
		type: mongoose.Schema.ObjectId,
		ref: "Course",
	},
	student: {
		type: mongoose.Schema.ObjectId,
		ref: "Student",
	},
});
