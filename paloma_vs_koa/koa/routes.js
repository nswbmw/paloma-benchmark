'use strict'

const router = require('koa-router')()
const User = require('./services/User')

module.exports = function (app) {
  app.use(router.routes())
  app.use(router.allowedMethods())

  router.get('/', async function (ctx, next) {
    ctx.body = `Hello, ${await User.getName()}`
  })
}
