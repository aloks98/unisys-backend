const mongoose = require('mongoose')

const theoryMarkModelSchema = mongoose.Schema({
    midsemMarks: Number,
    quizMarks: Number,
    endsemMarks: Number,
})