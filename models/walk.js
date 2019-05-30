module.exports = function(sequelize, DataTypes) {
  var Walk = sequelize.define("Walk", {
    time: {
      type: DataTypes.STRING
    },
    activity: {
      type: DataTypes.STRING
    },
    note: {
      type: DataTypes.TEXT
    }
  });

  Walk.associate = function(models) {
    Walk.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Walk.associate = function(models) {
    Walk.belongsTo(models.Dog, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Walk;
};
