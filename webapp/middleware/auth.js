const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('Authorization')

    if(!token) {
        return res.status(401).json({
            msg: "Authorization information is missing"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY)

        req.user = decoded.user
        next()
    } catch (error) {
        console.log(error.message)
        res.status(403).json({
            msg: "Authorization information is invalid"
        })
    }

}