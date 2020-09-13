//uso del process objeto blobla que se crea al momento de ejecutar un proceso
const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv; //el valor de la base deve ser enviado desde la consola al momneto de ejecutar el archivo
//con el comando node nombreDeArchivo --base=valor
let parametro = argv[2]; // obteno el parametro de la base
let base = parametro.split('=')[1]; //el split separa argumentos por medio del para,etro que le enviemos
//contruyendo un array del string
crearArchivo(base).then(archivo => console.log(`Archivo Creado ${archivo}`)).catch(e => console.log(e));
console.log(base);