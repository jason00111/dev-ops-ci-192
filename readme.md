[![CircleCI](https://circleci.com/gh/jason00111/dev-ops-ci-192.svg?style=shield)](https://circleci.com/gh/jason00111/dev-ops-ci-192)

## Setup Instructions

- clone repo
- run `npm install` to install dependencies
- run `npm test` to run tests
- run `npm start` to start server

## How to Deploy

The app is automatically deployed to Heroku (through CircleCi) when you push to GitHub and the tests pass.

This app is configured to send an email and a slack message when it is deployed.

If you want to deploy to Heroku manually
- run `heroku git:remote -a save-text` (on time only)
- run `npm deploy`

## Live Site
[save-text.herokuapp.com](https://save-text.herokuapp.com/)

## PaperTrail
go to https://papertrailapp.com/events and login or run `heroku addons:open papertrail`

## New Relic (Monitoring Service)
go to https://newrelic.com/ and login to see dashboard

## Sentry (Error Tracking)
go to https://sentry.io and login
