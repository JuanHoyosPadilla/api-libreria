const {Router} = require('express');
const router = Router();

const {registrarUsuario,todouser,login,perfilAuth} = require('../controllers/Usuario.controllers')

router.post('/registro', registrarUsuario);
router.get('/',todouser);
router.post('/login',login)
router.get('/perfil', perfilAuth);

module.exports = router;