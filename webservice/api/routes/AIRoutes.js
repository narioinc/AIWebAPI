'use strict';
module.exports = function(app) {
  var AIApi = require('../controllers/AIController');

  // todoList Routes
  app.route('/login')
    .post(AIApi.login);

  app.route('/register')
    .post(AIApi.register);

  app.route('/macdtask')
    .get(AIApi.listTasks)
    .post(AIApi.createTask);

  app.route('/macdtask/:taskId')
    .get(AIApi.readTask)
    .put(AIApi.updateTask)
    .delete(AIApi.deleteTask);

    app.route('/:userId/macdtask/')
      .get(AIApi.readUserTaskList);

    app.route('/:userId/macdtask/taskid:')
        .get(AIApi.readUserTask);
};
