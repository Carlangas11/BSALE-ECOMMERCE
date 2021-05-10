const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
        },
        url_image: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.BIGINT,
        },
        discount: {
            type: DataTypes.INTEGER,
        },
        category: {
            type: DataTypes.INTEGER
        }
    })
}

// id Identificador único del producto (int)
// name Nombre del producto (varchar)
// url_image URL de la imagen asociada al producto (varchar)
// price Precio de venta del producto (float)
// discount Porcentaje de descuento del producto (int)
// category Identificador de la categoría (int)