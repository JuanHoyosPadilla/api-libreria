const {Schema,model} = require('mongoose');

const SchemaLibros = new Schema({
    nombre: {
        type: String,

    },
    author: {
        type: String
    },
    descripcion: {
        type: String
    },
    fechadepublicacion: {
        type: Date
    }

});

module.exports = model('Libros', SchemaLibros);