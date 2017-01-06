'use strict'

const Koa = require('koa')
const app = new Koa()
const routes = require('./routes')

routes(app)

app.listen(3000)