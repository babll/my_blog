var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require("cors");
const session = require("express-session");//session模块

var app = express();
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:5500"],
  credentials:true
}));
app.use(cookieParser());
app.use(session({
  secret:"128位安全字符串",//加密条件
  resave:true,
  saveUninitialized:true
}));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailsRouter = require('./routes/details');
var elseRouter = require('./routes/else');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/details', detailsRouter);
app.use('/else', elseRouter);

// catch 404 and forward to error handler
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
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");//前端域名
  res.header("Access-Control-Allow-Credentials",'true');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

module.exports = app;
