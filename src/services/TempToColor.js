
/*
* Cria uma cor utilizando os primeiros três parametros como base 
* O primeiro parametro e o segundo são as cores a serem utilizadas
* O terceiro parametro é um valor dentre 0 e 1, o qual 0 é a cor do primeiro parametro e 1 é a or do segundo parametro
* Retorna uma cor entre os dois primeiros parametros em formato 'hex'
*
* @param {vm} Instância do vue
* @param {valor} valor dentre 0 e 1
*/
   
const colorBetween = require('color-between');
class TempToColor {
    static parse(vm,valor){
       return colorBetween(vm.cores_do_gradiente[0].valor, vm.cores_do_gradiente[1].valor, valor, 'hex');
    }
}

export default TempToColor;