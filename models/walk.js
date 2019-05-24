module.exports = function (sequelize, DataTypes) {
  const Walk = sequelize.define("Walk", {
    time: {
      type: DataTypes.STRING,
    },
    activity: {
      type: DataTypes.STRING,
      // get: function () {
      //   return JSON.parse(this.getDataValue('activity'))
      // },
      // set: function (val) {
      //   console.log(val)
      //   return this.setDataValue('activity', JSON.stringify(val))
      // }
    }
  });

  Walk.associate = function (models) {
    Walk.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Walk.associate = function (models) {
    Walk.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Walk;
}

