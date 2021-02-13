const app = require('./app');

function init(){
    app.listen(app.get('port'));
    console.log('Servidor funcionando en el puerto: ', app.get('port'));
}

init();