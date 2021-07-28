//服务器入口文件
//1创建KOA实例对象

const Koa = require('koa')
const app = new Koa()
    //2绑定中间件
    //绑定第一层
const resMiddlewareDuration = require('./middleware/koa_response_duration')
app.use(resMiddlewareDuration)
    //绑定第二层
const resMiddlewareHeader = require('./middleware/koa_response_header')
app.use(resMiddlewareHeader)
    //绑定第三层
const resMiddlewareData = require('./middleware/koa_response_data')
app.use(resMiddlewareData)
    //3绑定端口号
app.listen(8888)