[![CircleCI](https://circleci.com/gh/jason00111/dev-ops-ci-192.svg?style=shield)](https://circleci.com/gh/jason00111/dev-ops-ci-192)

## Setup Instructions

- clone repo
- run `npm install` to install dependencies
- run `npm test` to run tests
- run `npm start` to start server

- heroku git:remote -a save-text

## How to Deploy

The app is automatically deployed to Heroku (through CircleCi) when you push to GitHub and the tests pass.

If you want to deploy to Heroku manually, run `npm deploy`

## Live Site
save-text.herokuapp.com

## PaperTrail
heroku addons:open papertrail

## New Relic (Monitoring Service)
go to https://newrelic.com/ and login to see dashboard

## Sentry (Error Tracking)
go to https://sentry.io and login
