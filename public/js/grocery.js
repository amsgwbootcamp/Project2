module.exports = function(sequelize, DataTypes) {
    var Grocery = sequelize.define("Grocery", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Grocery;
  };
  