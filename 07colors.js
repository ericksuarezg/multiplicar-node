const { argv } = require('./config/yargs'); // importando el paquete de yargs para configuracion de variables desde consola 

var colors = require('colors'); //OJO importando el paquete de colores 
//uso del process objeto blobla que se crea al momento de ejecutar un proceso
const { crearArchivo } = require('./multiplicar/multiplicar2');
const { listarTable } = require('./multiplicar/multiplicar2');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('archivo creado ' + archivo.red)).catch(e => console.log(e));
        console.log(argv);
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}