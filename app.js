const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hi')
})

const server = app.listen(3000, function () {
  console.log('listening on port 3000')
})

module.exports = server
