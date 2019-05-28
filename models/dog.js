module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    }
  });

  Dog.associate = function(models) {
    Dog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Dog;
};
