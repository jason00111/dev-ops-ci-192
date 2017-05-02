const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : true }))

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.post('/save', function (req, res) {
  console.log('req.body:', req.body)
  res.redirect('/test')
})

app.get('/test', function (req, res) {
  res.send('hello there')
})

const server = app.listen(3000, function () {
  console.log('listening on port 3000')
})

module.exports = server
