const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
	teacherId: {
		type: String,
		required: true,
	},
	teacherName: {
		type: String,
		required: true,
	},
	teacherMajorSubject: {
		type: String,
		required: true,
	},
	teacherFacultyBranch: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Branches",
	},
	teacherStartYear: {
		type: Number,
		required: true,
	},
	teacherPayrollAmount: {
		type: Number,
		required: true,
	},
	teacherPayDate: {
		type: Date,
		required: true,
	},
});
