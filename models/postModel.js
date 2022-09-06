const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)
