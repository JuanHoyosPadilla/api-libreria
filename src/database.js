const mongoose = require('mongoose');
mongoose.connect(process.env.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', ()=> console.log('Error en la conexion'));
db.once('open', () => console.log('DB conectada'));