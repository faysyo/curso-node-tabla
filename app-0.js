const fs = require('fs');

// imprimir a ta bla de 5

console.clear();
console.log("================");
console.log("tabla de 5");
console.log("================");
console.log();
const base = 7;
let salida = '';

for(let i =1; i<=10;i++){
    r= base * i;
    salida += `${base} X ${i} = ${r}\n`;
}
console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    if(err) throw err;

    console.log(`Se creo el archivo tabla-${base}`);
})