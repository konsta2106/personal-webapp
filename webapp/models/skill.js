const mongoose = require('mongoose')

const SkillSchemaSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
})

module.exports = Skill = mongoose.model('skill', SkillSchemaSchema)