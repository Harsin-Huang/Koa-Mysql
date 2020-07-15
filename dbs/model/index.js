import Sequelize from 'sequelize'
import config from '../config.js'

// 实例化sequelize
export const sequelize = new Sequelize(config)

//测试数据库链接
sequelize.authenticate().then(function() {
    console.log("Connection has been established successfully.");
}).catch(function(err) {
    //连接失败
    console.error(err);
    throw err;
});

// 导入模型统一管理
export const Users            = sequelize.import(__dirname + '/user.js')
export const Articles        = sequelize.import(__dirname + '/article.js')

// 表间关联关系
