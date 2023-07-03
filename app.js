

const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


// console.log(process.argv)
console.log(argv);


// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));