const express = require('express')
    // const bodyParser = require('body-parser')
    // const _ = require('lodash')

// const starterContent = require(__dirname +"/starterContent.js")
const app = express();
const PORT = process.env.PORT || 3000


// Setting ejs to check in the views section
app.set('view engine', 'ejs')
    // app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

// Routes
// Landing page Route
app.get('/', (req, res) => {
        res.render('index')
    })
    // Home page route
    // app.get('/home', (req, res) => {
    //     res.render("index")
    // })

// transaction page route
app.get('/transaction', (req, res) => {
    res.render('transaction')
})

// Login and sign up
app.get('/login', (req, res) => {
    res.render('login')
})


// contact(phoneBook)
app.get('/contact', (req, res) => {
    res.render('mycontact')
})

// Listening to the port.
app.listen(PORT, () => {
    console.log(`You are running on port $ { PORT }`)
})