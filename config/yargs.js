var colors = require('colors');


const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar'.yellow
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'.yellow
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Maximo numero a multiplicar'.yellow
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'.red;
        }
        return true;
    })
    .argv;

module.exports = argv;