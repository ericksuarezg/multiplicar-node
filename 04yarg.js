//libreria cargada con el npm que se encarga de organizar comandos para la llamada desde consola
//                               nombbre del comando            comentario sobre el comando      
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
    .help() //se puede utilizar esta funcion para los argumendos de 'argv'
    .argv; //propiedad donde estan los argumentos del process
//uso del process objeto blobla que se crea al momento de ejecutar un proceso
const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv; //el valor de la base deve ser enviado desde la consola al momneto de ejecutar el archivo
//con el comando node nombreDeArchivo --base=valor

console.log(argv.limite);
console.log(argv2);
/* let parametro = argv[2]; // obteno el parametro de la base
let base = parametro.split('=')[1]; */ //el split separa argumentos por medio del para,etro que le enviemos
//contruyendo un array del string
/* crearArchivo(base).then(archivo => console.log(`Archivo Creado ${archivo}`)).catch(e => console.log(e));
console.log(base); */