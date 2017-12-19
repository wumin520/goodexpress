require('babel-polyfill')
var express = require('express');
const Resource = require('express-resource')
var app = express();
const orm = require('orm')

app.set('views', './views')
app.set('view engine', 'jade')

var options = {
    protocol: 'mysql',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    port: '3307',
    database: 'mytest',
    query:    {pool: true}
}
app.use(orm.express(options, {
    define: function (db, models, next) {
        models.person = db.define("person", {
            name      : String,
            surname   : String,
            age       : Number, // FLOAT
            male      : Boolean,
            continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antarctica" ], // ENUM type
            photo     : Buffer, // BLOB/BINARY
            data      : Object // JSON encoded
        }, {
            methods: {
                fullName: function () {
                    return this.name + ' ' + this.surname;
                }
            },
            validations: {
                age: orm.enforce.ranges.number(18, undefined, "under-age")
            }
        })
        next();
    }
}));
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.resource('forums', require('./routes/forum'));
app.resource('persons', require('./routes/person'))

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});