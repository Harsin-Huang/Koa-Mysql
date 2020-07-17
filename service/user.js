import { Users, Articles } from '../dbs/model/index.js'

class service {
  // 查找全部信息
  static async list({ page = 1, size = 20 }) {
    return await Users.findAndCountAll({
        // raw: true,
        include: [
          { model: Articles }, 
        ],
        attributes: ['id', 'name', 'sex', 'age', 'url'],
        offset: (page - 1) * size,
        limit: size
    })
  }
  // 通过属性查找相关信息
  static async find(data) {
    return await Users.findOne(data);
  }
  // 通过ID查找相关信息
  static async findId(data) {
    return await Users.findById(data);
  }
  // 创建信息
  static async create(data) {
    return await Users.create(data);
  }
  // 更新信息
  static async update(data) {
    return await Users.update(data.content, {
        where: {
            id: data.id
        }
    })
  }
  // 删除信息
  static async delete(data) {
    return await Users.destroy({where:{id:data}});
  }
}

module.exports = service