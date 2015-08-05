var fs = require('fs');
var http = require('http');
var app;

before(function() {
  app = http.createServer(require('../../app'));
  app.listen(0);
  browser.baseUrl = 'http://'+ app.address().address +':'+ app.address().port;
});

after(function() {
  app.close();
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});
