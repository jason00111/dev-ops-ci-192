# Concept Focus: DevOps and CI

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can choose a goal that fits your ZPD
- Can build tested, full-stack web apps with Node.js
- Can install and use frameworks and libraries in your applications
- Can use testing tools in the Node.js environment
- Have used Heroku to deploy Node.js apps
- Are comfortable jumping into a new codebase
- Are interested in deploying apps to a production environment
- Are interested in strengthening your DevOps skills
- Are interested in using continuous integration

## Description

Choose a project and get into serious DevOps mode with it: deploy, configure production environment, add tracking/monitoring tools, and more.

As a professional web developer, you don't need to be an expert in developer operations (DevOps). But a little skill goes a long ways. Use this goal to gain DevOps exposure, experience, and basic skills.

_Concept focus_ goals like this one have some unique characteristics. If this is your first time working on one, read the [Context](#context) for more information.

In working on this goal, you should explore concepts like:

- application deployment
- runtime environment (development/production/test)
- continuous integration (CI)
- remote hosting
- logging in production
- error tracking
- application monitoring
- email/SMS messaging

For guidance and support, start with the [Resources](#resources) provided.

## Context

This goal is a _concept focus_ goal, which means that it is not specific about the project you build, but rather the concepts that you apply in building it.

You will have to choose _what to build_. The details of the project are up to you. The project can be pre-written (so long as you have permission to use it) or a new one of your own choosing. You can even choose projects from other goals.

For inspiration, review the [list of project ideas](http://jsdev.learnersguild.org/project-ideas.html).

The advantage of this is that you can work on whatever kind of project you like, so long as you focus on building your skills and knowledge of the concept in question.

The disadvantage is that it is very easy to get distracted or to waste time on non-essential tasks like making decisions about project design. It is also likely that you won't have as much support available, since other learners and coaches won't have worked on the same project as you. If you prefer to have more structure and deterministic outcomes, you may not enjoy this goal.

That being said, if you have the self-discipline, motivation, and resolve, you will likely benefit from choosing this goal.

An added benefit of working on a concept-focus goal is that you'll have a project with lots of great _examples_ that you can reference later.

## Specifications

- [x] Artifact produced is a GitHub repo.
- [x] Repo contains a full-stack web application using Node.js.
  - [x] Application uses a database (at least one).
  - [x] Application provides a HTML UI.
  - [x] Application has a test suite.
- [x] Application has working commands to:
  - [x] Install dependencies (example: `$ npm install`)
  - [x] Start the server (example: `$ npm start`)
  - [x] Run tests (example: `$ npm test`)
  - [x] Deploy to production (example: `$ npm run deploy`)
- [x] README includes basic "Getting Started" instructions (install, set up database, etc.).
- [x] Application is deployed to Heroku.
  - [x] Link to deployed application on Heroku is included in README.
  - [x] Deployed application on Heroku uses at least one hosted database.
  - [x] Deployed application on Heroku uses at least one worker process.
- [x] README includes "How to Deploy" instructions (setting environment variables, configuring databases, etc.)
- [x] Continuous integration is configured.
  - [x] CI status badge is added to the README (example: [Circle CI docs on status badge](https://circleci.com/docs/1.0/status-badges/)).
  - [x] CI is integrated with GitHub to run tests with each new pull request.
- [x] Application uses a monitoring service like [New Relic](https://newrelic.com/) or [Keymetrics](https://keymetrics.io/).
  - [x] Link to monitoring service is included in README.
- [x] Production logging service like [PaperTrail](https://papertrailapp.com/) is used.
  - [x] Production app logs at least 3 key events to logging service.
  - [x] Link to logging service is included in README.
- [x] Production error tracking service like [Sentry](https://sentry.io/welcome/) is used.
  - [x] Link to error tracking service is included in README.
- [x] Application uses a deploy hook ([Heroku's built in Deploy Hooks](https://elements.heroku.com/addons/deployhooks) is a good option) to send email or Slack message with each new deploy.
- [x] Application uses email and/or SMS messaging to alert users (for example: send welcome email on sign up).
- [x] The best resources you find for learning testing are added to a file `resources.md`.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Stretch

- [ ] Application is deployed using another host besides Heroku (examples: [Digital Ocean](https://www.digitalocean.com/), [AWS](https://aws.amazon.com/)).
  - [ ] Link to alternate deploy is added to README.
- [ ] Application provides indexed search with ElasticSearch.
  - [ ] Application UI has search feature.

## Resources

##### Tools

- [Heroku](https://www.heroku.com/) #hosting #devops
- [Travis CI](https://travis-ci.org/) #ci #devops
- [Circle CI](https://circleci.com) #ci #devops
- [New Relic](https://newrelic.com/) #monitoring #devops
- [Keymetrics](https://keymetrics.io/) #monitoring #devops
- [PaperTrail](https://papertrailapp.com/) #logging #devops
- [Sentry](https://sentry.io/welcome/) #errortracking #devops
- [Mailgun](https://www.mailgun.com/) #email
- [Sendgrid](https://sendgrid.com/) #email
- Heroku Addon: [Easy SMS](https://elements.heroku.com/addons/easysms) #sms
- Heroku Addon: [Deploy Hooks](https://elements.heroku.com/addons/deployhooks) #devops
- [Digital Ocean](https://www.digitalocean.com/) #hosting #devops
- [AWS](https://aws.amazon.com/) #hosting #devops

##### Guides

- Heroku: [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) #heroku #nodejs #devops
- Heroku: [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) #heroku #nodejs #devops
- Heroku: [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) #heroku #nodejs #devops
- Heroku: [How Add-ons Work](https://devcenter.heroku.com/articles/how-add-ons-work) #heroku #devops

##### Courses

- Frontend Masters [Zero to Production Node.js on Amazon Web Services](https://frontendmasters.com/courses/production-node-aws/) #nodejs #aws #devops

[mit-license]: https://opensource.org/licenses/MIT
