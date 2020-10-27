const mongoose = require('mongoose');

const marksSchema = mongoose.Schema({
    marksObtained: {
        type: Number,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    }
});
