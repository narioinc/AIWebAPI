'use strict';


var mongoose = require('mongoose'),
  Auth = mongoose.model('Auth'),
  MACDTasks = mongoose.model('MACDTasks');
  
exports.login = function(req, res) {
	console.log(req.body.username);
  Auth.find({username: req.body.username}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.register = function(req, res) {
  var new_user = new Auth(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.listTasks = function(req, res) {
  MACDTasks.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.createTask = function(req, res) {
  var new_task = new MACDTasks(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.readTask = function(req, res) {
  MACDTasks.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.updateTask = function(req, res) {
  MACDTasks.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.deleteTask = function(req, res) {


  MACDTasks.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

