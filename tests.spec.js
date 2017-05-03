const request = require('supertest')
const server = require('./app')

describe('express routes', function () {
  it('\'/\' returns status 200', function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200, done)
  })

  it('\'/abcd\' returns status 404 when there is no text saved at this address', function (done) {
    request(server)
      .get('/abcd')
      .expect(404, done)
  })

  it('\'/save\' returns status 302 (redirect) and redirects to the new address and this returns status 200', function (done) {
    request(server)
      .post('/save')
      .type('form')
      .send({text: 'hello there'})
      .expect(302)
      .expect('location', /^\/[a-z]{4}$/)
      .then(redirect => {
        request(server)
          .get(redirect.headers.location)
          .expect('Content-Type', /text\/html/)
          .expect(200, done)
      })
      .catch(error => {
        console.log(error)
        done()
      })
  })

})
