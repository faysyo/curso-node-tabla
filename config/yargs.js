const { describe } = require('node:test');



const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption : true,
                    describe :' Es la base de multiplicar'
                })
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe : 'lista la tabla de la base de multiplicar'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    
                    default: false,
                    describe : 'limite de la base a multilpicar'
                })
                .check((argv, opcion) =>{
                    if(isNaN(argv.b) & isNaN(argv.h)){
                        throw console.log("La base debe ser un numero");
                    } 
                    return true

                }).argv;

module.exports = argv;