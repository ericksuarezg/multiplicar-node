//este rachivo configura las variables que se hacen desde la consola (comandos)
const opcionesConfiguracion = {
    base: { // tercer argumento:[objeto] variable que contiene el comando 
        demand: true, //propiedad que obliga al comando a utilizar esta variable
        alias: 'b' // el alias que podra tener esta variable am momento de ser llamada desde consola
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs') //configuracion de variables por consola
    .command('listar', 'imprieme en consola la tabla de multiiplicar', opcionesConfiguracion)
    .command('crear', 'crea un archivo de la tabla de multiplicar', opcionesConfiguracion)
    .help() //se puede utilizar esta funcion para los argumendos de 'argv'
    .argv;

module.exports = {
    argv: argv
}