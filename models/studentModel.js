const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    studentId: { 
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    studentProgramme: {
        type: String,
        required: true,
    },
    studentBranch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Branches,
    },
    studentStartYear: {
        type: Number,
        required: true,
    },
    studentEndYear: {
        type: Number,
        required: true,
    }
})