const mongoose = require('mongoose')

const GuideSchema = new mongoose.Schema({

    championID: {
        type: String,
    },
    url: {
        type: String,
        required: [true, "URL is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, { timestamps: true })

module.exports.Guide = mongoose.model('Guide', GuideSchema)