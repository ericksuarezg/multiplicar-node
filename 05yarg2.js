const argv = require('yargs').command('listar', 'imprieme en consola la tabla de multiiplicar', {
        base: { // tercer argumento:[objeto] variable que contiene el comando 
            demand: true, //propiedad que obliga al comando a utilizar esta variable
            alias: 'b' // el alias que podra tener esta variable am momento de ser llamada desde consola
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'crea un archivo de la tabla de multiplicar', {
        base: { // tercer argumento:[objeto] variable que contiene el comando 
            demand: true, //propiedad que obliga al comando a utilizar esta variable
            alias: 'b' // el alias que podra tener esta variable am momento de ser llamada desde consola
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() //se puede utilizar esta funcion para los argumendos de 'argv'
    .argv; //propiedad donde estan los argumentos del process
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
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo Creado ${archivo}`)).catch(e => console.log(e));
        console.log(argv);
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}







//let argv2 = process.argv; el valor de la base deve ser enviado desde la consola al momneto de ejecutar el archivo
//con el comando node nombreDeArchivo --base=valor