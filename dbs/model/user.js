// Users模型

export default (sequelize, DataTypes) => {
    return sequelize.define('Users', {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(30),
      },
      sex: {
        type: DataTypes.STRING(30),
      },
      age: {
        type: DataTypes.INTEGER,
      },
      password: {
        type: DataTypes.STRING(10),
      },
      url: {
        type: DataTypes.STRING(100),
      }
    })
  }