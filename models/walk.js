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

  return Walk;
}

