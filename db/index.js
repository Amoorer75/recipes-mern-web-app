const moongoose = require("mongoose")
const express = require("express")
const { default: mongoose } = require("mongoose")
require("dotenv").config()

let MONGODB_URL = process.env.MONGO_URI


mongoose.connect(MONGODB_URL, 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB")
    })
    .catch((e) => {
        console.error("Connection error", e.message)
    })

const db = mongoose.connection

module.exports = db

