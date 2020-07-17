const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const cors = require('koa2-cors')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 引入接口
import api from './controller/index.js'
// 引入中间件
import auth from './middleware/auth.js'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 7000

// error handler
onerror(app)

// 解决前端跨域问题
app.use(
  cors({
      origin: function(ctx) {
        return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: true, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], 
  })
);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// 请求验证
// app.use(auth())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(api.routes()).use(api.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(port, host)

module.exports = app
