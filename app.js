var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//import component routes
var appRoutes = require('./routes/app');
var rsvpRoutes = require('./routes/rsvp');
var adminRoutes = require('./routes/admin');

var app = express();
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://admin:admin@ds141960.mlab.com:41960/wedding-template')
mongoose.connect('localhost:27017/wedding-template');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//set component routes
app.use('/admin', adminRoutes);
app.use('/rsvp', rsvpRoutes);
app.use('/', appRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
