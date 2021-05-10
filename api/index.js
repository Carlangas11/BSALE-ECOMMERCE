const server = require("./src/app.js")
const {sequelize} = require("./src/models/index")
// importar modelos


sequelize.sync({alter: true}).then(()=>{
    server.listen(3001);
})