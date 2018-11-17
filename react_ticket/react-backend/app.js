// [LOAD PACKAGES]
var createError = require('http-errors');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// Connection URL
var url = 'mongodb+srv://user1:VBkYMy7Br5cS6sz@cluster0-v9uv1.mongodb.net/mongodb_blockchain?retryWrites=true'
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.use('/concert', require('./routes/index'));

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