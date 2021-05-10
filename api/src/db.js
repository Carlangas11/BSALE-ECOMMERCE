// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// // const fs = require("fs");
// // const path = require("path");
// const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize("bsale_test", "bsale_test", "bsale_test", {
//   host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
//   dialect: "mysql",
//   loggin: false,
// });

// // const basename = path.basename(__filename);

// // const modelDefiners = [];

// // // leemos todos los archivos de la carpeta Models, los requerimos y argreamos al arreglo modelDefiners
// // fs.readdirSync(path.join(__dirname, "/models"))
// // .filter((file)=> file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
// // .forEach((file)=> {
// //     modelDefiners.push(require(path.join(__dirname, "models", file)))
// // })

// // // injectamos la conexion (sequelize) a todos los modelos
// // modelDefiners.forEach((model)=> model(sequelize));
// // // Capitalizamos los nombres de los modelos ie: product => Product
// // let entries = Object.entries(sequelize.models);
// // let capsEntries = entries.map((entry) => [
// //     entry[0][0].toUpperCase() + entry[0].slice(1),
// //     entry[1],
// //   ]);
// // sequelize.models = Object.fromEntries(capsEntries)

// // // En sequelize.models están todos los modelos importados como propiedades
// // // para relacionarlos hacemos un destructuring
// // const { Product, Cateogry} = sequelize.models

// // // relaciones

// module.exports = {
//     // ...sequelize.models, // para poder importar los modelos asi: onst { Product, User } = require('./db.js');
//     conn: sequelize
// }