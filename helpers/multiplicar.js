const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, h = 0) => {

    try {

        let salida = '';


        for (let i = 1; i <= h; i++) {
            
                r = base;

                salida += `${base} ${"x".green} ${i} ${"=".green} ${r}\n`;

        }


        if (listar) {

            console.log();
            console.log('================'.green);
            console.log('tabla de ', base);
            console.log("================".green);
            console.log();
            console.log(salida);
        }




        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


        return colors.rainbow(`Se creo el archivo tabla-${base}`);

    } catch (error) {
        throw error;
    }






}


module.exports = {
    crearArchivo
}