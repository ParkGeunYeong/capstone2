// [LOAD PACKAGES]
var createError = require('http-errors');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// [CONFIGURE APP TO USE bodyParser]
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// [ CONFIGURE mongoose ]
// CONNECT TO MONGODB SERVER
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function() {
//   //CONNECTED TO MONGODB SERVER
//   console.log("Connected to mongod server");
// });

// Connection URL
var url = 'mongodb+srv://pmmm114:_sjGHPpi-KMkRc9@cluster0-v9uv1.mongodb.net/mongodb_blockchain?retryWrites=true'
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
