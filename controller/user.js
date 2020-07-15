import service from '../service/user.js'
const jwt = require('jsonwebtoken');

class usersController {
    static async list(ctx, next) {
      const size = 20;  // 每页10条数据
      const page = 1;  // 页数
      const { count, rows }  = await service.list({page, size})
      ctx.body = {
        code: 200,
        data: {
          total: count,  //总数
          body: rows  //请求回来的信息
        }
      }
    }
    static async create(ctx) {
       const name = ctx.request.body.name; 
       const user = await service.find({ where:{name} });
       if(user){
           ctx.body = "用户已存在！";
           return;
       }
       try {
        await Users.create(ctx.request.body)
        ctx.body = '注册成功！'
       } catch (e) {
        ctx.body = '注册失败！';
       }
    }
    static async update(ctx) {
        try {
            await service.update(ctx.request.body)
            ctx.body = '修改成功！'
        } catch (e) {
            ctx.body = '修改失败！';
        }
    }
    static async delete(ctx) {
        try {
            await service.delete(ctx.request.body)
            ctx.body = '删除成功！'
        } catch (e) {
            ctx.body = '删除失败！';
        }
    }
    static async login(ctx) {
        const name = ctx.request.body.name;
        const password = ctx.request.body.password;
        const user = await service.find({ where:{name}});
        if(user && name == user.name && password == user.password){
          var jwtTokenSerret = "fjJWT";
          var token = jwt.sign({name, password}, jwtTokenSerret, {expiresIn: "1h"});
          ctx.body = {
            code: 200,
            msg: "登录成功！",
            token: token,
            data: {
              id: user.id,
              name: user.name,
              url: user.url
            }
          }
        }else{
          ctx.body = "用户或者密码错误！";
        }
    }
}

module.exports = usersController