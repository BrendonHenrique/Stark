import Vue from 'vue'
import { QSpinnerGears } from 'quasar'
const vm  = new Vue()
const spinner = typeof QSpinnerGears !== 'undefined'
? QSpinnerGears : Quasar.components.QSpinnerGears

class loader { 
    static initLoader = () => vm.$q.loading.show({
        spinner,
        spinnerColor: 'red',
        messageColor: 'black',
        backgroundColor: 'grey-7',
        message: 'Carregando informações ...'
    })

    static finishLoader = () => {
        setTimeout(() => {
            vm.$q.loading.hide()
        }, 1000)
    }
   
}

export default loader