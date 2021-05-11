const server = require("./src/app.js")
// const {conn, Product, Category} = require("./src/models/index


// Product.sync()
// Category.sync({alter: true})
// Product.sync({alter:true})

server.listen(3001, () => {
  console.log('%s listening at 3001'); 
});