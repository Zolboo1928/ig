const express = require("express")
const mongoose = require("mongoose")
const connectMongoose = require("./controller/connectMongoose")
const userRoute = require("./routes/userRoute")
const postRoute = require("./routes/postRoute")

const Port = 8000
const app = express()
app.use(express.json())

connectMongoose()
app.use(userRoute)
app.use(postRoute)

app.listen(Port,()=> console.log(`running on ${Port}`))