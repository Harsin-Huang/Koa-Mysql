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
      type: {
        type: DataTypes.STRING(30),
      },
      author: {
        type: DataTypes.STRING(30),
      },
      content: {
        type: DataTypes.STRING(2000),
      },
      url: {
        type: DataTypes.STRING(100),
      }
    })
  }