'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MACDTaskSchema = new Schema({
  taskType: {
    type: Number,
    required: 'Kindly enter the task type (Mandatory)'
  },
  createdBy: {
    type: String,
    required: 'Kindly enter the password (Mandatory)'
  },
  createdOn: {
	type: Date,
	 default: Date.now
  },
  userComments: {
	type: String,
	default: 'task created'
  },
  status:{
	type: Number,
	default: 1
  }
});

module.exports = mongoose.model('MACDTasks', MACDTaskSchema);