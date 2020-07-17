// Massage模型

export default (sequelize, DataTypes) => {
    return sequelize.define('Massage', {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true 
      },
      topic_id: {
        type: DataTypes.INTEGER(),
      },
      content: {
        type: DataTypes.STRING(3000),
      },
      from_uid: {
        type: DataTypes.INTEGER(),
      },
      to_uid: {
        type: DataTypes.INTEGER(),
      },
    })
  }