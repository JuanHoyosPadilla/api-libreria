const {Router} = require('express');
const router = Router();

// Obtener controladores
const {obtenerLibros,obtenerUnLibro,editarLibro,eliminarLibro,guardarLibro} = require('../controllers/Libros.controllers')

router.get('/',obtenerLibros);
router.get('/:id',obtenerUnLibro)
router.post('/',guardarLibro)
router.put('/:id',editarLibro)
router.delete('/:id',eliminarLibro)

module.exports = router;