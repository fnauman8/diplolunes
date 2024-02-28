var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var preciosRouter = require('./routes/precios'); // routes/precios.js
var adopcionRouter = require('./routes/adopcion'); //routes/adopcion.js
var transitoRouter = require('./routes/transito'); //routes/transito.js
var ofrecerRouter = require('./routes/ofrecer'); //routes/ofrecer.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use('/adopcion', adopcionRouter)
app.use('/transito', transitoRouter)
app.use('/ofrecer', ofrecerRouter)
app.use('/precios', preciosRouter)
app.get('/ruta1', function(req, res){
  res.send('Hola soy la pagina de prueba')

})

app.get('/ruta2', function(req, res){
  res.send('Hola soy la pagina de promociones')

})

app.get('/ruta3', function(req, res){
  res.send('Hola soy la pagina de promociones')

})


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
