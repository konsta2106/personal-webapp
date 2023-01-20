const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer');
require('dotenv').config()

router.post('/', async (req, res) => {
    const { name, phone, email, subject, message } = req.body
try {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `konsta.2106@gmail.com`,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: 'AboutKonsta <konsta.2106@gmail.com>',
        to: 'konsta.2106@gmail.com',
        subject: subject,
        text: `
            Sender: ${name}
            Sender phone: ${phone}
            Sender email: ${email}
            Message: ${message}
            `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json('Error')
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json('Email sent')
        }
    });
} catch (error) {
    console.log(error)
}
    // try {
    //     const result = await emailjs.send(serviceId, templateId, req.body, userId)
    //     console.log(result)
    // } catch (error) {
    //     console.log(error)
    // }
    // res.status(200).json('Message sent')
})

module.exports = router