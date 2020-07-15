import service from '../service/article.js'
const jwt = require('jsonwebtoken');

class articlesController {
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
       try {
        await Users.create(ctx.request.body)
        ctx.body = '添加成功！'
       } catch (e) {
        ctx.body = '添加失败！';
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
}

module.exports = articlesController