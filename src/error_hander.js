import logger from './logger'

function logErrors(err, req, res, next) {
  console.error(err.stack);
  logger.error(err.stack)
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}

export default class ErrorHander {
  constructor (app) {
    app.use(logErrors)
    app.use(clientErrorHandler)
    app.use(errorHandler)
  }
}