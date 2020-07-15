// sequelize配置文件
export default {
  // 连接数据库
  database: 'eggdemo',
  username: 'harsin',
  password: 'root168',
  host: '127.0.0.1',
  dialect: 'mysql',
  // 连接池
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // 数据表全局配置
  define:{
    freezeTableName:true,
    timestamps:false,
    paranoid:false,
    operatorsAliases: false
  },
  // 时区
  timezone: '+08:00'
}
