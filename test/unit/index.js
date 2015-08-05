'use strict';

describe('module x router', function() {
  var router;
  var req;
  var res;
  var assert = require('chai').assert;

  before(function() {
    router = require('../../index');
    req = {};
    res = {};
  });

  it('should respond to the get request', function(done) {
    req.url = '/';
    req.method = 'get';

    res.send = function(content) {
      assert.equal(content, 'Hello from module y');
      done();
    };
    router.handle(req, res);
  });

});
