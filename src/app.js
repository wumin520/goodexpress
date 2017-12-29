'use strict'
require('babel-polyfill')
const express = require('express')
require('express-resource')
const app = express()
const orm = require('orm')
const compression = require('compression')
const morgan = require('morgan')
const bodyParser = require('body-parser')
import Db from './db'

let resolve = (src) => {
  return __dirname + src
}

let config = require('./dev.config')
const configPath = process.env.MYAPP_CONFIG
if (configPath) {
  config = require(configPath)
  console.log(configPath)
}
global.gConfig = config
global.db = new Db(config.db)

app.set('views', resolve('/views'))
app.set('view engine', 'jade')

app.use(orm.express(config.db.orm_options, {
  define: function (db, models, next) {
    models.person = db.define('person', {
      name      : String,
      surname   : String,
      age       : Number, // FLOAT
      male      : Boolean,
      continent : ['Europe', 'America', 'Asia', 'Africa', 'Australia', 'Antarctica'], // ENUM type
      photo     : Buffer, // BLOB/BINARY
      data      : Object // JSON encoded
    }, {
      methods: {
        fullName: function () {
          return this.name + ' ' + this.surname;
        }
      },
      validations: {
        age: orm.enforce.ranges.number(18, undefined, 'under-age')
      }
    })
    next();
  }
}));
app.use(compression())

app.use(morgan('combined'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.resource('forums', require('./routes/forum'));
app.resource('persons', require('./routes/person'))

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});