const server = require("./src/app.js")
const {db, Product, Category} = require("./src/models/index")
// importar modelos
// Product.sync()
// Category.sync({alter: true})
// Product.sync({alter:true})
db.sync({alter:true}).then(()=>{
    server.listen(3001);
})