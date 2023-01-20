const express = require('express')
const router = express.Router()

const Skill = require('../../models/skill')

router.get('/', async (req, res) => {
    const skills = await Skill.find()
    res.status(200).json(skills)
})

module.exports = router