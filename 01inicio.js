//por destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 34;


crearArchivo(base).then(archivo => console.log(`Archivo Creado ${archivo}`)).catch(e => console.log(e))