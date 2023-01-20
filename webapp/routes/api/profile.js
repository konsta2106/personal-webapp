const express = require('express')
const { BlobServiceClient } = require("@azure/storage-blob");
const router = express.Router()
const User = require('../../models/user')
const Blog = require('../../models/blog')

router.post('/cover-letter', async (req, res) => {
    const password = req.body.password
    const user = await User.findOne({ name: "Konsta" })
    if (password != user.apiKey) {
        res.status(403).json({
            status: 403,
            message: "Invalid authorization"
        })
    } else {
        const blog = await Blog.findOne({ type: "coverLetter" })
        console.log(blog)
        res.json(blog)
    }
})

router.post('/cv', async (req, res) => {
    try {
        const password = req.body.password
        const user = await User.findOne({ name: "Konsta" })
        if (password != user.apiKey) {
            console.log("Failed attempt to download CV due to incorrect password")
            res.status(403).json({
                status: 403,
                message: "Invalid authorization"
            })
        } else {
            const connStr = process.env.STORAGE_URL;
            const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
            const containerName = process.env.CONTAINER;
            const blobName = process.env.CV;
            
            const containerClient = blobServiceClient.getContainerClient(containerName);
            const blobClient = containerClient.getBlobClient(blobName);
            
            // Get blob content from position 0 to the end
            // In Node.js, get downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
            const downloadBlockBlobResponse = await blobClient.downloadToBuffer();
            
            res.json(downloadBlockBlobResponse.toString('base64'));
            console.log("Successful CV download attempt")
        }
    } catch (error) {
        console.log(error)
    }

})

module.exports = router