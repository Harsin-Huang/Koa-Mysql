// Articles模型

export default (sequelize, DataTypes) => {
    return sequelize.define('Articles', {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true 
      },
      title: {
        type: DataTypes.STRING(100),
      },
      class_id: {
        type: DataTypes.INTEGER(),
      },
      user_id: {
        type: DataTypes.INTEGER(),
      },
      content: {
        type: DataTypes.STRING(3000),
      },
      url: {
        type: DataTypes.STRING(100),
      }
    })
  }