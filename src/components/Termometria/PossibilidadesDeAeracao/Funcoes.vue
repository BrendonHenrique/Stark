<template>
    <div class="col-11" :class="!isFlipped ? 'show' : 'hide'">
        <q-separator inset class="q-mb-md" />
         
            <!-- <q-list class="col-12">
                <q-item dense v-for="item in aeracao.funcoes" 
                :key="item.label" class="bg-grey-1 q-my-md" clickable v-ripple>
                <q-item-section avatar class="q-mr-md">
                    <q-btn round size="sm" :color="item.isActivated ? 'positive' : 'negative' " />
                </q-item-section>
                <q-item-section class="text-grey-7">{{item.label}}</q-item-section>
                </q-item>
            </q-list> -->
        
        <!-- <status-aerador :status_atual="'semi-auto'" /> -->

        <!-- <div class="row justify-inline">
              <q-input 
                v-for="item in aeracao.infos.ambiente"
                :key="item.label"
                suffix="%"
                bottom-slots 
                maxlength="7"
                dense
                style="width: 33.3%"  
                debounce="500"
                @input="SalvarInfosDeAmbiente(item.valor,item.label)"
                v-model.number="item.valor">
                <template v-slot:hint>
                    {{item.label}}
                </template>
            </q-input>
        </div> -->

        
    </div>
</template>

<script> 
import {mapActions} from 'vuex'
import NotifyUsers from '../../../services/NotifyUser'

export default {
    props:['aeracao','isFlipped'],
    methods:{
        ...mapActions('aeracao',['update_infos_ambiente']),
        SalvarInfosDeAmbiente(valor,label){
            let novas_infos = {valor,label}
            setTimeout( () => {
                this.update_infos_ambiente(novas_infos)
                NotifyUsers.success('As novas informações sobre o ambiente foram salvas com sucesso')
            },500);
        }
    },
    components:{
        'status-aerador': require('./StatusAerador').default
    }
}
</script>

<style lang="stylus">
    .show
        display initial 

    .hide
        display none
</style>
