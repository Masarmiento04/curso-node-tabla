var colors = require('colors');
const fs = require('node:fs');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
    try {
        
        let val, salida = ''; 
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            val = index * base;
            salida += `${base} x ${index} = ${val}\n`;
            consola += `${colors.blue(base)} x ${colors.yellow(index)} = ${colors.green(val)}\n`;
        }
        
        if(listar){
            console.log(`===========Tabla del ${base}===========`.bgCyan);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida);
    
        return `Se ha creado la Tabla del ${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}