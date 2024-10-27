var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()


const mongoose = require('mongoose')

// console.log();

// mongoose.connect('mongodb://127.0.0.1:27017/famillerDB')
mongoose.connect(`${process.env.DB_URL}famillerDB`)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message));


var adminsRouter = require('./routes/admins');
var usersRouter = require('./routes/users');
var services1Router = require('./routes/services1');
var educationRouter = require('./routes/educations');
var loansahayRouter = require('./routes/loansahay');
var villageRouter = require('./routes/village');
var surnamesRouter = require('./routes/surnames');
var resultsRouter = require('./routes/results');
var executivecommitteeRouter = require('./routes/executives');
var advicerRouter = require('./routes/advicers');
var donorsRouter = require('./routes/donors');
var imagesRouter = require('./routes/images');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.render("index", { title: "Express API Running" })
})

app.use('/admins', adminsRouter);
app.use('/users', usersRouter);
app.use('/services1', services1Router);
app.use('/educations', educationRouter);
app.use('/loansahay', loansahayRouter);
app.use('/village', villageRouter);
app.use('/surnames', surnamesRouter);
app.use('/results', resultsRouter);
app.use('/executives', executivecommitteeRouter);
app.use('/advicers', advicerRouter);
app.use('/donors', donorsRouter);
app.use('/images', imagesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
