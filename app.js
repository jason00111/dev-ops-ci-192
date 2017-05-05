require('newrelic')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const redis = require('redis')
const sgHelper = require('sendgrid').mail
const sendGrid = require('sendgrid')(process.env.SENDGRID_API_KEY)

const redisClient = process.env.REDIS_URL
  ? redis.createClient(process.env.REDIS_URL)
  : redis.createClient()

function randomChar () {
  const aCharCode = 97
  const zCharCode = 122
  return String.fromCharCode(Math.floor(Math.random() * (zCharCode - aCharCode + 1) + aCharCode))
}

function randomString () {
  return randomChar() + randomChar() + randomChar() + randomChar()
}

redisClient.on("error", function (err) {
    console.log("Error " + err);
})

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
  month: 2592000000,
  second: 10000
}

function saveAndRedirect (req, res) {
  const key = randomString()
  redisClient.get(key, function (err, reply) {
    if (reply) {
      saveAndRedirect(req, res)
    } else {
      maybeSendEmail(req.body.text)
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

function maybeSendEmail (text) {
  const sendEmailIndex = text.search('sendEmailTo:')
  if (sendEmailIndex !== -1) {
    const matches = /\S+@\S+/.exec(text.slice(sendEmailIndex + 'sendEmailTo:'.length))
    if (matches) {
      const toEmailString = matches[0]
      const toEmail = new sgHelper.Email(toEmailString)
      const fromEmail = new sgHelper.Email('noreply@save-text.herokuapp.com')
      const subject = 'Hello'
      const content = new sgHelper.Content('text/plain', text)
      const mail = new sgHelper.Mail(fromEmail, subject, toEmail, content)

      const request = sendGrid.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
      })

      sendGrid.API(request, function(error, response) {
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
      })
    }
  }
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
