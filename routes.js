'use strict';

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.redirect('/module-y');
  });
  app.use('/module-y', require('./index'));
}
