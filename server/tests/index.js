'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../index');

test('Correct users returned', function (t) {
  request(app)
    .post('/players/create')
    .send({name: 'john',
    phone_number: '8327827316',
    password: '1234yes',})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedUser = 'john';
      console.log("Response is:", res.body);
      t.error(err, 'No error');
      t.same(res.body.op.name, expectedUser, 'Player as expected');
      t.end();
    });
});


