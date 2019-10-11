'use strict'
require('babel-polyfill')
const express = require('express')
require('express-resource')
const app = express()
const orm = require('orm')
const compression = require('compression')
const morgan = require('morgan')
const bodyParser = require('body-parser')
import { initModelsViews }  from './models_views/index'
import Db from './db'
import errorHander from './error_hander'
const session = require('express-session')
const RedisStore = require('connect-redis')(session)


let resolve = (src) => {
  return __dirname + src
}

// init config default: ./dev.config
let config = require('./dev.config')
const configPath = process.env.MYAPP_CONFIG
if (configPath) {
  config = require(configPath)
  console.log(configPath)
}
global.gConfig = config
global.db = new Db(config.db)

// 初始化orm db models
initModelsViews(app, config)

// set view engine
app.set('views', resolve('/views'))
app.set('view engine', 'jade')

// app compression
app.use(compression())

// app logger
app.use(morgan('combined'))

// session store
app.use(session({
  store: new RedisStore(config.redis_conf),
  secret: 'keyboard cat',
  cookie: {maxAge: 60000 }
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// views router
app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
  req.session.views = (req.session.views || 0) + 1
  res.render('index', { title: 'Hey', message: 'Hello there! views: ' + req.session.views });
});

app.resource('forums', require('./routes/forum'));
app.resource('persons', require('./routes/person'))

// 统一错误处理
new errorHander(app)

// 404 handler
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

// server start
var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});