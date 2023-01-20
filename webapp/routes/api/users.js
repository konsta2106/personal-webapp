const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')

router.get('/', async (req, res) => {
    const users = await User.find().select('name email -_id')
    console.log(users)
    res.status(200).json(users)
})

router.get('/:userId', (req, res) => {
    console.log(req.protocol)
    console.log(res.ip)
    res.send(`User with id ${req.params.userId}`)
})

router.post(`/${process.env.ADMIN_ROUTE}`, [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Email is missing or invalid format').isEmail(),
    check('password', 'Enter password with 6 or more characters').isLength({min: 6})
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            statusCode: 400, 
            errors: errors.array() 
        })
    }
    console.log(req.body)

    let { name, email, password } = req.body

    // Check if user exists
    try {
        let user = await User.findOne({ email })

        if(user) {
            res.status(400).json({
                errors: [
                    {
                        msg: "User already exists"
                    }
                ]
            })
        }

        // Encrypt Password
        const salt = await bcrypt.genSalt(10)

        password = await bcrypt.hash(password, salt)

        user = await new User({
            name,
            email,
            password
        }).save()

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        const token = await jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: 360000})

        res.status(201).json({
            name,
            email,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500)
    }    
})

module.exports = router