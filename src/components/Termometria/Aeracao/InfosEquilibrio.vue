<template>
    <div class="equilibrio-higroscopico" 
    style="margin-top: 12px;z-index:3;">
        <q-input 
            style="width: 7rem;font-size: 20px;"
            v-model="equilibrio_higroscopico.equilibrio" 
            bottom-slots 
            suffix="%"
            readonly 
            >
            <template v-slot:before>
                <q-img style="width:30px;color:grey" src="../../../assets/icons/balance.png" />
            </template>
            <template v-slot:hint>
                Equilibrio
            </template>
        </q-input>
     
        <q-input 
            style="width: 7rem;z-index:3;font-size: 20px;" 
            v-model.number="novo_equilibrio" 
            bottom-slots 
            suffix="%"
            maxlength="7"
            debounce="500"
            lazy-rules
            :rules="[  val =>  val > 0 && val < 100 || 'Valor deve estar entre 0 e 100']"
            >
            <template v-slot:before>
                <q-icon size="30px" name="schedule" />
            </template>
            <template v-slot:hint>
                Atual
            </template>
        </q-input>
        
        <save-button
        class="q-mt-xl"
        :isDisabled="valorIncorreto"
        @salvarAlteracoes="salvarNovoEquilibrio" 
        :mensagem="`Deseja salvar ${novo_equilibrio} como o valor higroscópico atual ?`"/>

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
 