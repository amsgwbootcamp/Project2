module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Product.associate = function(models) {
    Product.belongsTo(models.ProductCategory, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Product;
};
