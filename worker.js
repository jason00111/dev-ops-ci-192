const redis = require('redis')
const Raven = require('raven')

Raven.config('https://5d07237c965b4928b0b4bfea885ae361:40fb5b435916496eba931b5132647407@sentry.io/165449').install()

const redisClient = process.env.REDIS_URL
  ? redis.createClient(process.env.REDIS_URL)
  : redis.createClient()

redisClient.on("error", function (err) {
    console.log("Error " + err);
    Raven.captureException(err)
})

redisClient.keys('*:time', function (err1, keys) {
  if (keys.length === 0) {
    redisClient.quit()
    return
  }

  keys.forEach(function (key, index) {
    let lastKey = false
    if (index === keys.length - 1) {
      lastKey = true
    }
    redisClient.get(key, function (err2, expireTime) {
      const keyWithoutTime = key.split(':')[0]
      if (Date.now() >= expireTime) {
        redisClient.del(keyWithoutTime, function (err, response) {
          if (response === 1) console.log(keyWithoutTime, 'deleted')
          if (err) console.log('Error', err)
        })
        redisClient.del(key, function (err, response) {
          if (response === 1) console.log(key, 'deleted')
          if (err) console.log('Error', err)
        })
      }
      if (lastKey) redisClient.quit()
    })
  })
})
