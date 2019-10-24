<template>
    <div class="row no-wrap pendulo-wrapper">
        <!-- Pêndulo -->
        <div
            class="pendulo column justify-end "
            v-for="pendulo in pendulos"
            :key="pendulo.id_pendulo">
            <sequential-entrace :delay="50" >
                <!-- Sensores -->
                <div
                    v-for="sensor in pendulo.sensores"
                    :key="sensor.id_sensor + key"
                    class="column">
                    <q-chip class="q-mt-sm pendulo-chip" 
                        :style="{'color':checkColorStatus(sensor),
                        'background-color': parseBySensorStatus(sensor)}">
                        
                        <q-avatar color="grey" text-color="white">
                            {{sensor.id_sensor + 1}}
                        </q-avatar>
                        
                        <span class="text-weigth-bold">
                         {{sensor.temperatura}} ºC
                        </span>

                    </q-chip>
                </div>
                <!--  -->
            </sequential-entrace>
            
            <!-- Número do pêndulo -->
            <q-btn round class="text-thin text-h6 text-center text-black 
            q-mt-sm bg-grey-5 indicador-do-pendulo" size="15px">
            p{{pendulo.id_pendulo + 1}}
            </q-btn>
            <!--  -->
        
        </div>
        <!--  -->
    
    </div> 
</template>

<script>
// Service auxiliar para transformar a temperatura em cor 
// import TempToColor from '../../../services/TempToColor'
// lib para animar a entrada dos sensores
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import Vue from 'vue'
Vue.use(SequentialEntrance) 

// TinyColor é uma biblioteca auxiliar para verificar se a cor de fundo q-chip é muito escura ou clara 
var tinycolor = require("tinycolor2");

import {mapGetters} from 'vuex';

export default {
    props:['pendulos'],
    data(){
        return{
            key: 1,  
        }
    },   
    computed:{
        ...mapGetters('configuracoes',['get_color_by_sensor_status','parse_temp_to_color']),
        configuracoesDeCores(){
            return this.$store.state.configuracoes.configuracoes_de_cores;
        }
    },
    methods:{
        // Transforma o status do sensor em cor de fundo dependendo das configurações da legenda de cor
        parseBySensorStatus(sensor){
            if(sensor.status === 'Ativo'){ //se tiver ativo usa o gradiente de temperatura
                return this.parse_temp_to_color(sensor.temperatura / this.configuracoesDeCores.temperatura_alta)
            }else{//se não usa uma das cores da legenda
                return this.get_color_by_sensor_status(sensor.status)
            }
        },
        // Verifica se a cor de fundo é escura , caso seja transforma faz o set da cor da font para branco 
        checkColorStatus(sensor){
            if(tinycolor(this.get_color_by_sensor_status(sensor.status)).isDark()){
                return 'white'
            }else if(tinycolor(this.get_color_by_sensor_status(sensor.status)).isLight()){
                return 'black'
            }
        }
    },
    components:{
        'sequential-entrace': require('../../Shared/SequentialEntrace').default,
    },
    watch:{
        // Utilizo a variavel key para forçar a renderização dos sensores quando o conteúdo de pendulos é alterado
        pendulos(){
            this.key = this.key * Math.random()
        }
    }
}
</script>

<style lang="stylus">

    .indicador-do-pendulo
        position relative

    .pendulo
        border-radius 80px
        border 2px dotted #e4d2d2
        align-items center
        width 130px
        padding 10px 10px 20px 14px
        margin-right 15px 
        
        span
            position relative
            right 2px
            display flex
            flex-direction column-reverse
                
    .pendulo-chip::after
        content: "|"
        position absolute 
        top 30.8px
        left 45px
        color grey

    .pendulo-wrapper
        display flex 
        justify-content space-between 
        margin-right 1rem
        width 100%

</style>