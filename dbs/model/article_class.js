// Articles_class模型

export default (sequelize, DataTypes) => {
    return sequelize.define('Articles_class', {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true 
      },
      name: {
        type: DataTypes.STRING(30),
      }
    })
  }