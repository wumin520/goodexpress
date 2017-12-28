const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('./log4js').logstash

function logErrors(err, req, res, next) {
    console.log('logErrors: ')
    console.error(err.stack);
    logger.error(err.stack)
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    console.log('clientErrorHandler: ')
    if (req.xhr) {
        res.status(500).send({ error: 'Something blew up!' });
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    console.log('errorHandler: ')
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res, next) {
    console.log(req.body)

    if (req.query.id == 'err') {
        return next(new Error('error'))
    }
    res.send('hello world')
})

app.use(logErrors)

app.use(clientErrorHandler)

app.use(errorHandler)

const server = app.listen(12345, function (req, res) {
    let address = server.address().address
    let port = server.address().port

    console.log('listening in address: ' + address + ' port :' + port)
})