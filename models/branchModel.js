const mongoose = require('mongoose')

const branchSchema = mongoose.Schema({
    branchId: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    branchProgramme: {
        type: String,
        required: true
    }
})