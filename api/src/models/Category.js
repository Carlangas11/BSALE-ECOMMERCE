const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define('category', {
        name: {
            type: DataTypes.STRING
        }
    })
}

// id Identificador único de la categoría (int)
// name Nombre de la categoría (varchar)