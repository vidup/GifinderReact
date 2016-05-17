//Dependencies
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Database
// var db = require('../database/db');
// mongoose.connect(db.distant);

//Models
var User = require('../models/User');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

//routes
router.get('/', function(req, res){
  res.json({text : "account"});
});

//Export for require in server.js
module.exports = router;
