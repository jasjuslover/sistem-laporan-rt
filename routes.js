'use strict';

module.exports = function (app) {
  const controller = require('./controller');

  app.route('/').get(controller.index);

  app.route('/report').post(controller.postReport);
}