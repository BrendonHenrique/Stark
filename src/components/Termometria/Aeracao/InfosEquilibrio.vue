<template>
    <div class="equilibrio-higroscopico">
        
        <q-input 
            class="q-mb-md infos-equilibrio-input"
            v-model="equilibrio_higroscopico.equilibrio" 
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
            v-model.number="novo_equilibrio" 
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
        
        <q-tooltip v-if="valorIncorreto">
            <span class="infos-equilibrio-input">
                Insira um valor válido para o equilibrio higroscópico atual
            </span>
        </q-tooltip>

        <save-button
        style="margin-top:35px;margin-left: 25px;"
        :isDisabled="valorIncorreto"
        @salvarAlteracoes="salvarNovoEquilibrio" 
        :mensagem="`Deseja salvar ${novo_equilibrio} como o valor higroscópico atual ?`">
        </save-button>

        
    </div>
</template>

<script>
 
import {mapGetters, mapActions} from 'vuex' 
import { setTimeout } from 'timers';
import NotifyUser from '../../../services/NotifyUser';

export default {
    props:['equilibrio_higroscopico'], 
    data(){
        return{
            novo_equilibrio: 0,
            valorIncorreto: true
        }
    },
    mounted(){
        this.novo_equilibrio = this.aeracao.infos.equilibrio_higroscopico.atual
    },  
    methods:{
        ...mapActions('aeracao',['update_equilibrio_higroscopico_atual']),
        salvarNovoEquilibrio(){
            this.update_equilibrio_higroscopico_atual(this.novo_equilibrio)
        }
    },
    computed:{
        ...mapGetters('aeracao',['aeracao'])
    },
    components:{
        'save-button': require('../../Shared/SaveButton').default,
    },
    watch:{
        novo_equilibrio(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true
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