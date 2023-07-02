/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      nombre: {
        type: 'string',
      },
      precio: {
        type: 'number',
      },
      stock: {
        type: 'number',
      },
      bodega: {
        type: 'number',
      },
      proveedor: {
        type: 'number',
      },
      descripcion: {
        type: 'string',
      }


  },

};

