const express = require('express')
const app = express()

app.get('*', function (req, res) {
    console.log(req.query)
    res.send('hello world')
})

const server = app.listen(12345, function (req, res) {
    let address = server.address().address
    let port = server.address().port

    console.log('listening in address: ' + address + ' port :' + port)
})