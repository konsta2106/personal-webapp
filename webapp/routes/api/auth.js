const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middleware/auth')
const User = require('../../models/user')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/me', authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
})

router.post('/login', [
    check('email', 'Email is missing or invalid format').isEmail(),
    check('password', 'Password is required').notEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            statusCode: 400,
            errors: errors.array()
        })
    }

    let { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            res.status(422).json({
                msg: "Invalid credentials"
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            res.status(403).json({
                msg: "Invalid credentials"
            })
        }

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        const token = await jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: 360000})

        res.status(201).json({
            email,
            token
        })

    } catch (error) {

    }


})

// router.get('/:userId', (req, res) => {
//     res.send(`Auth route with ${req.params.userId}`)
// })

module.exports = router