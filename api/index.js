const server = require("./src/app.js")
const {db, Product, Category} = require("./src/models/index")




db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
// Product.sync()
// Category.sync({alter: true})
// Product.sync({alter:true})
db.sync({force:false}).then(()=>{
    server.listen(3001);
})