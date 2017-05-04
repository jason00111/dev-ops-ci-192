require('newrelic')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const redis = require('redis')

const redisClient = process.env.REDIS_URL
  ? redis.createClient(process.env.REDIS_URL)
  : redis.createClient()

function randomChar () {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
}

function randomString () {
  return randomChar() + randomChar() + randomChar() + randomChar()
}

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

app.use(bodyParser.urlencoded({ extended : true }))

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())

app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('index')
})

const msFromNow = {
  minute: 600000,
  hour: 3600000,
  day: 86400000,
  week: 604800000,
  month: 2592000000
}

function saveAndRedirect (req, res) {
  const key = randomString()
  redisClient.get(key, function (err, reply) {
    if (reply) {
      saveAndRedirect(req, res)
    } else {
      redisClient.set(key, req.body.text, function (err, reply) {
        if (req.body.time !== 'forever') {
          const expire = new Date(Date.now() + msFromNow[req.body.time])
          redisClient.set(`${key}:time`, expire.valueOf(), function (err, reply) {
            res.redirect(`/${key}`)
          })
        } else {
          res.redirect(`/${key}`)
        }
      })
    }
  })
}

app.post('/save', saveAndRedirect)

app.get(/^\/[a-z]{4}$/, function (req, res) {
  const key = req.path.slice(1)
  redisClient.get(key, function (err, reply) {
    if (reply) {
      res.render('index', {text: reply})
    } else {
      res.status(404).send('Not found')
    }
  })
})

const port = process.env.PORT || 3000

const server = app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

module.exports = server
