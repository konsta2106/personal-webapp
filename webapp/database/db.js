const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.COSMOSDB_CONNECTION_URL

const connectDb = async () => {
    try {
        await mongoose.connect(db)
        console.log('Connected to CosmosDB')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = {
    connectDb
}