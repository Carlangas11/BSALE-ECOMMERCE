require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");
// const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize("bsale_test", "bsale_test", "bsale_test", {
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  loggin: false,
});

class Product extends Model {}

Product.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    url_image: {
      type: DataTypes.STRING(255),
    },
    price: {
      type: DataTypes.FLOAT,
    },
    discount: {
      type: DataTypes.INTEGER(11),
    },
    category: {
      type: DataTypes.INTEGER(11),
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

class Category extends Model {}

Category.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
   
  },
  {
    sequelize,
    modelName: "Category",
  }
);
// the defined model is the class itself
console.log(Product === sequelize.models.Product);
console.log(Category === sequelize.models.Category);
//   const product = db.product()
//   console.log(product)
//   console.log(db.Product)
//   const Product = db.define('product',{
//     name: {
//         type: DataTypes.STRING,
//     },
//     url_image: {
//         type: DataTypes.TEXT,
//     },
//     price: {
//         type: DataTypes.BIGINT,
//     },
//     discount: {
//         type: DataTypes.INTEGER,
//     },
//     category: {
//         type: DataTypes.INTEGER
//     }
//   })

//   const Category = db.define('category',{
//     name: {
//         type: DataTypes.STRING,
//     },

//   })

// relacionar tablas

module.exports = {
  //   Product,
  //   Category,
  sequelize,
};
