//Setting up the server
require("dotenv").config() 
const express = require("express") 

const PORT = process.env.PORT || 3000
const app = express()

const drinks = require("./models/drinks")


//Routes
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", { drinks })
})

app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`)
})

