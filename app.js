//require express
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(3000, function() {
    console.log('Example app is now listening to port 3000 dudes YEAHHHHHHHHHHHHHHHH' 
    + 'way cooler than your regular hello world because I added this extra text yehhhhahhhahahhhh!!!! okay that is enough')
})