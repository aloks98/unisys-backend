const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseCredits: {
        type: Number,
        required: true
    },
    courseMarks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theoryMarks'
    }
})