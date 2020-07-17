import Sequelize from 'sequelize'
import config from '../config.js'

// 实例化sequelize
export const sequelize = new Sequelize(config)

//测试数据库链接
sequelize.authenticate().then(function() {
    console.log("成功连接数据！");
}).catch(function(err) {
    //连接失败
    console.error(err);
    throw err;
});

// 同步模型到数据库
// sequelize.sync({force: true}).then(() => {
//     console.log('已经同步模型到数据库')
//     process.exit()
// })

// 导入模型统一管理
export const Users            = sequelize.import(__dirname + '/user.js')
export const Articles         = sequelize.import(__dirname + '/article.js')
export const Articles_class   = sequelize.import(__dirname + '/article_class.js')
export const Massage          = sequelize.import(__dirname + '/massage.js')

// 表间关联关系
// 文章关系
Articles.belongsTo(Users, {
    foreignKey:'user_id',
    targetKey:'id',
    as: 'author',
})
Articles.belongsTo(Articles_class, {
    foreignKey:'class_id',
    targetKey:'id',
    as: 'articles_class',
})
Articles.hasMany(Massage, {
    foreignKey:'topic_id',
    sourceKey: Massage,
    as: 'comment',
})


// 用户关系
Users.hasMany(Articles, {
    foreignKey:'user_id',
    sourceKey:'id',
})