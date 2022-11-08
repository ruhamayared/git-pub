//Setting up the server
require("dotenv").config() 
const express = require("express") 

const PORT = process.env.PORT || 3000
const app = express()

const drinks = require("./models/drinks")

//Middleware


//Routes
app.get("/drinks", (req, res) => {
    res.send(drinks)
})
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})



app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`)
})