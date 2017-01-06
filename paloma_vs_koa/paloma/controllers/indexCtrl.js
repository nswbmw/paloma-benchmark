'use strict'

app.controller('indexCtrl', async function (ctx, next, User) {
  ctx.body = `Hello, ${await User.getName()}`
})