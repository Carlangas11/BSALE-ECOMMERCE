const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          url_image: {
              type: DataTypes.STRING,
          },
          price: {
              type: DataTypes.FLOAT,
              allowNull: false,
          },
          discount: {
              type: DataTypes.INTEGER,
          }
        }, {
          freezeTableName: true,
          timestamps: false
        })
}

// id Identificador único del producto (int)
// name Nombre del producto (varchar)
// url_image URL de la imagen asociada al producto (varchar)
// price Precio de venta del producto (float)
// discount Porcentaje de descuento del producto (int)
// category Identificador de la categoría (int)