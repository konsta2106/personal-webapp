const mongoose = require('mongoose')

const BlogSchemaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
})

module.exports = Blog = mongoose.model('blog', BlogSchemaSchema)