'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AuthSchema = new Schema({
  username: {
    type: String,
    required: 'Kindly enter the username (Mandatory)'
  },
  password: {
    type: String,
    required: 'Kindly enter the password (Mandatory)'
  },
  userType: {
	type: Number,
	default: 1
  }
});

module.exports = mongoose.model('Auth', AuthSchema);