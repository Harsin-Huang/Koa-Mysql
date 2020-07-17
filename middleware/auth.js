const jwt = require('jsonwebtoken');
const moment = require('moment');

//定义允许直接访问的url
const allowpage = ['/login']

// 检查用户会话
module.exports = (options, app) => {
    return async function login(ctx, next) {
        let url = ctx.originalUrl
        if (allowpage.indexOf(url) > -1) {
            console.log('--可以请求路由--' + url)
            await next()
        }else {
            var token = ctx.header['x-authentication']
            // 解析 token
            if (token) {
                // 确认token
                try {
                    jwt.verify(token, "fjJWT");
                    await next()
                }catch (error) {
                    if (error.name == 'TokenExpiredError') {
                        ctx.body = {
                            code: 50014,
                            msg: '登录状态已过期'
                        };
                    }
                }
            } else {
                ctx.body = { code: 50008, msg: '请登陆后再进行操作' }
            }
        }
    }
};