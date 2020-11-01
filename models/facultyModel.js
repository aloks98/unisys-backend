const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
	facultyId: {
		type: String,
		required: true,
	},
	facultyName: {
		type: String,
		required: true,
	},
	qualification: {
		type: String,
		required: true,
	},
	experience: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	dateOfJoining: {
		type: Date,
		required: true,
	},
	coursesTeaching: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Courses",
		},
	],
});
