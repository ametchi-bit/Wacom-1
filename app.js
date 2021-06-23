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

app.get('/', (req, res)=>{
    res.render("index")
})



// Listening to the port.
app.listen(PORT, ()=>{
    console.log(`You are running on port ${PORT}`)
})