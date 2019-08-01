const colorBetween = require('color-between');

class TempToColor {
    static parse(vm,valor){
       return colorBetween(vm.cores_do_gradiente[0].valor, vm.cores_do_gradiente[1].valor, valor, 'hex');
    }
}

export default TempToColor;