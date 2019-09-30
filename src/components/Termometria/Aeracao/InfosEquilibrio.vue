<template>
    <div class="equilibrio-higroscopico">
        
        <!-- Inputs de equilibrio higroscópico -->
        <q-input 
            class="q-mb-md infos-equilibrio-input"
            v-model.number="novoEquilibrioHigroscopico.equilibrio" 
            bottom-slots 
            suffix="%"
            readonly 
            >
            <template v-slot:before>
                <q-img class="equilibrio-image" src="../../../assets/icons/balance.png" />
            </template>
            <template v-slot:hint>
                <span class="text-subtitle1">
                    Equilibrio
                </span>
            </template>
        </q-input>
        
        <q-input  
            class="infos-equilibrio-input"
            v-model.number="novoEquilibrioHigroscopico.atual" 
            bottom-slots 
            suffix="%"
            maxlength="7"
            lazy-rules
            :rules="[  val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100']"
            >
            <template v-slot:before>
                <q-icon size="36px" name="schedule" />
            </template>
            <template v-slot:hint>
                <span class="text-subtitle1">
                    Atual
                </span>
            </template>
        </q-input>
        <!--  -->
        
        <q-tooltip v-if="valorIncorreto">
            <span class="infos-equilibrio-input">
                Insira um valor válido para o equilibrio higroscópico atual
            </span>
        </q-tooltip>

        <save-button
        style="margin-top:35px;margin-left: 25px;"
        :isDisabled="valorIncorreto"
        @salvarAlteracoes="salvarNovoEquilibrio" 
        :mensagem="`Deseja salvar ${novoEquilibrioHigroscopico.atual} como o valor higroscópico atual ?`">
        </save-button>

    </div>
</template>

<script>
import SiloController from '../../../controllers/Silos/Controller'

export default {
    props:['index_silo'], 
    data(){
        return{
            novoEquilibrioHigroscopico:{
                atual: '',
                equilibrio: '',
            },
            valorIncorreto: true
        }
    },
    mounted(){
        this.getEquilibrioDoStore(this.index_silo)
    },  
    methods:{
        salvarNovoEquilibrio(){
            SiloController.updateEquilibrioHigroscopicoAtual({
            index_silo: this.index_silo,
            novoEquilibrio: this.novoEquilibrioHigroscopico.atual
            })
        },
        getEquilibrioDoStore(novoIndex){
            Object.assign(this.novoEquilibrioHigroscopico, 
            SiloController.getEquilibrioHigroscopico(novoIndex))
        }
    },
    computed:{
        novoEquilibrio(){
            return this.novoEquilibrioHigroscopico.atual
        }, 
    },
    components:{
        'save-button': require('../../Shared/SaveButton').default,
    },
    watch:{
        novoEquilibrio(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true
        },
        index_silo(novoIndex){
            this.getEquilibrioDoStore(novoIndex)
        }
    }
}
</script>
 
<style scoped lang="stylus">

    .infos-equilibrio-input
        width 10rem
        z-index 3 
        font-size 17px

    .equilibrio-higroscopico
        margin-top 12px 
        z-index 3

    .equilibrio-image 
        width 35px 
        color grey

</style>