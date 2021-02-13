const Libros = require('../model/modellibros/Libros')
const obtenerLibros = async (req, res) => {
   const librosDB = await Libros.find()
    res.json({
        mensaje: "obteniendo libros",
        librosDB
    })
}

const guardarLibro = async (req, res) => {
    const body = req.body;
    const newlibro = await Libros(body);
    newlibro.save((err,librodb) => {
        if(err){
            res.json({
                err
            })
        }

        res.json({
            mensaje: "Libro guardado",
            librodb
        })

    })
    
}

const obtenerUnLibro = async (req, res) => {
    const id = req.params.id
    await Libros.findById(id, (err, libro) => {
        if(err){
            res.json({
                err
            })
        }
        res.json({
            mensaje:"Libro optenido",
            libro
        })
    })

}

const editarLibro = async (req, res) => {
   const id = req.params.id;
   const body = req.body;

   await Libros.findByIdAndUpdate(id,body,{new:true}, (err, libro) => {
       if(err){
           res.json({err})
       }
       res.json({
           mensaje: "Libro Actualizado",
           libro
       })
   })

}

const eliminarLibro = async (req, res) => {
    const id = req.params.id;
    await Libros.findByIdAndDelete(id,(err) => {
        if(err){
            res.json({err})
        }
        res.json({
            mensaje: "Libro eliminado"
        })
    })
}

module.exports = {
    obtenerLibros,
    obtenerUnLibro,
    editarLibro,
    eliminarLibro,
    guardarLibro
}