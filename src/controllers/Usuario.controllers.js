const bcrypt = require('bcrypt');
const Usuario = require('../model/modelusuario/Usuario');
const jwt = require('jsonwebtoken');

const registrarUsuario = async (req, res) => {
    const {email, contraseña} = req.body;
    const user = await new Usuario({email,contraseña});
    bcrypt.hash(contraseña,10,function(err, hashcontraseña){
        user.contraseña = hashcontraseña 
        user.save();
       return res.json({
            user
        });
    });
}

const todouser = async (req, res) => {
    const user = await Usuario.find();
    res.json(user)
}

const login = async (req, res) => {
    const {email, contraseña} = req.body;
    await Usuario.findOne({email: email}, (err, user) => {
        const hash = user.contraseña
        if(!user){res.json({mensaje: "Usuario no encontrado"})}
            bcrypt.compare(contraseña,hash, function(err, resultado){
            if(resultado === true){
                const token = jwt.sign({email: email}, 'secreto', {expiresIn: 60*60});
                return res.json({
                        mensaje: "usuario logueado",
                        token
                        })
            }
            
            res.json({mensaje: "Contraseña o email invalido"})
        })
    })

}

const perfilAuth = async (req, res) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.json({mensaje: "Usuario no logueado"})
    }

    const decoded = jwt.verify(token,'secreto');
    const usuario = await Usuario.findOne({email: decoded.email})

    res.json({
        mensaje: "Usuario logueado",
        usuario
    })
    
}

module.exports = {
    registrarUsuario,
    todouser,
    login,
    perfilAuth
}