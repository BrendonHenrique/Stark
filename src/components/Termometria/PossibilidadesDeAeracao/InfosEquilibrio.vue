<template>
     <div style="left:0.5rem;position: relative;margin-top: 8px;z-index:3;">
        <q-input 
            style="width: 8rem;"
            v-model="equilibrio_higroscopico.equilibrio" 
            bottom-slots 
            suffix="%"
            readonly 
            dense>
            <template v-slot:before>
                <q-img style="width:30px;color:grey" src="../../../assets/icons/balance.png" />
            </template>
            <template v-slot:hint>
                Equilibrio
            </template>
        </q-input>
     
        <q-input 
            style="width: 7.6rem;position:relative;left:7px;top:6px;z-index:3;" 
            v-model.number="novo_equilibrio" 
            bottom-slots 
            suffix="%"
            maxlength="7"
            debounce="500"
            @input="salvarNovoEquilibrio"
            dense
            >
            <template v-slot:before>
                <q-icon style="position:relative;right:4.3px;" name="schedule" />
            </template>
            <template v-slot:hint>
                Atual
            </template>
        </q-input>
        
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
            novo_equilibrio: null
        }
    },
    mounted(){
        this.novo_equilibrio = this.aeracao.infos.equilibrio_higroscopico.atual
    },  
    methods:{
        ...mapActions('aeracao',['update_equilibrio_higroscopico_atual']),
        salvarNovoEquilibrio(){
            setTimeout( () => {
                this.update_equilibrio_higroscopico_atual(this.novo_equilibrio)
                NotifyUser.success('Equilíbrio higroscópico atual atualizado')
            },500);
        }
    },
    computed:{
        ...mapGetters('aeracao',['aeracao'])
    }
}
</script>