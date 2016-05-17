// Dependencies
var mongoose = require('mongoose');

// Schema
var userSchema = new mongoose.Schema({
  userName : String,
  userPassword : String,
  gifs : Array
});

// Return model
module.exports = mongoose.model('User', userSchema, "users");
