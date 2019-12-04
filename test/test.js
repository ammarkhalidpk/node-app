var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('Respond with Hello World!', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Welcome tCI/CD POC', done);
 });
});