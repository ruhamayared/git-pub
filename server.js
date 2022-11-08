//Setting up the server
require("dotenv").config() 
const express = require("express") 

const PORT = process.env.PORT || 3000
const app = express()

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})