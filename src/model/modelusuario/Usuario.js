const {Schema,model} = require('mongoose');
const Libro = model('Libros');

const usuarioShema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    libro: {type: Schema.ObjectId, ref: "Libro"}

});

module.exports = model('Usuario', usuarioShema);