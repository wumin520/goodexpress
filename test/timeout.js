var express = require('express')
var bodyParser = require('body-parser')
var timeout = require('connect-timeout')
var compression = require('compression')

var app = express()
app.use(compression())
app.post('/save', timeout('5s'), bodyParser.json(), haltOnTimedout, function (req, res, next) {
    savePost(req.body, function (err, id) {
        if (err) return next(err)
        if (req.timedout) return
        res.send('saved as id ' + id)
    })
})

function haltOnTimedout (req, res, next) {
    if (!req.timedout) next()
}

function savePost (post, cb) {
    setTimeout(function () {
        cb(null, ((Math.random() * 40000) >>> 0))
    }, (Math.random() * 7000) >>> 0)
}

const server = app.listen(3000, function (req, res) {
    let address = server.address().address
    let port = server.address().port

    console.log('listening in address: ' + address + ' port :' + port)
})