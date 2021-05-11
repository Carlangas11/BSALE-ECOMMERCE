require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: "3306",
  dialect: "mysql",
  loggin: false,
});

console.log(db.models);

class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
    },
    url_image: {
      type: DataTypes.STRING,
      field: "url_image",
    },
    price: {
      type: DataTypes.FLOAT,
      field: "price",
    },
    discount: {
      type: DataTypes.INTEGER,
      field: "discount",
    },
  },
  {
    modelName: "product",
    tableName: "products",
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
  }
);
console.log(db.models);

class Category extends Model {}
Category.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
    },
  },
  {
    modelName: "category",
    tableName: "categories",
    sequelize: db,
    freezeTableName: false,
    timestamps: false,
  }
);
console.log(db.models);
Product.belongsTo(Category, { as: "category", foreignKey: "categoryId" });
Category.hasMany(Product, {
  as: "category",
  foreignKey: "categoryId",
  ondDelete: "CASCADE",
});

module.exports = {
  Product,
  Category,
  db,
};
