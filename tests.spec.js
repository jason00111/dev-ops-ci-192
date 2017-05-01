const request = require('supertest')
const server = require('./app')

describe('express routes', function () {
  it('\'/\' renders "hi"', function (done) {
    request(server)
      .get('/')
      .expect(200, done)
  })
})
