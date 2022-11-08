//Setting up the server
require("dotenv").config() 
const express = require("express") 

const PORT = process.env.PORT || 3000
const app = express()

const drinks = require("./models/drinks")
const food = require("./models/food")


//Routes
//Drinks
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
        drinks: drinks,
    })
})

app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id]
    })
})

//Food
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
        drinks: drinks
    })
})


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`)
})