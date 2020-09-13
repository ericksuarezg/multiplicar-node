//const { rejects } = require('assert');
let fs = require('fs'); //pauqete o libreria propio de Node 
//const { Module } = require('module'); //de la libreria, por destructuracion tomamos Module
//let fs= require('express'); paquete que no es propio de Node (No nativo)
//let fs= require('./fs');archivos nuestros que haran ´parte del proyecto 


let data = '';

let crearArchivo = async(base) => {

    if (!Number(base)) {
        throw (`el valor introducido ${base} no es un numero`);
    }
    for (let i = 1; i <= 10; i = i + 1) {
        data += (`${base} X ${i} = ${base * i}\n`);
    }
    fs.writeFile(`tablas/tabladel${base}.txt`, data, (err) => {
        if (err) {
            throw err
        }

    });
    return `tabladel${base}.txt`;


}



//objeto global que se crea al momento de ejecutar Node
module.exports = {
    crearArchivo: crearArchivo
}