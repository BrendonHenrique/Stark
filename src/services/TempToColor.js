
/*
* Cria uma cor utilizando os primeiros três parametros como base 
* O primeiro parametro e o segundo são as cores a serem utilizadas
* O terceiro parametro é um valor dentre 0 e 1, o qual 0 é a cor do primeiro parametro e 1 é a or do segundo parametro
* Retorna uma cor entre os dois primeiros parametros em formato 'hex'
*
* @param {vm} Instância do vue
* @param {valor} valor dentre 0 e 1
*/
import LegendaDeCoresController from '../controllers/LegendaDeCores/Controller';
const colorBetween = require('color-between');
class TempToColor {
    static parse(valor){
       return colorBetween(LegendaDeCoresController.getCoresDoGradiente()[0].valor, 
       LegendaDeCoresController.getCoresDoGradiente()[1].valor, valor, 'hex');
    }
}

export default TempToColor;