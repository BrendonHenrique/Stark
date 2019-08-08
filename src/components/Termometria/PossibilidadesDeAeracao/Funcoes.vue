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

        <q-btn label="Bottom" icon="keyboard_arrow_down" color="primary" @click="open('bottom')" />
        
            <q-dialog v-model="dialog" position="bottom" full-width>
                <q-card>
                
                    <q-card-section class="row items-center no-wrap">
                        <div>
                            <div class="text-weight-bold">The Walker</div>
                            <div class="text-grey">Fitz & The Tantrums</div>
                        </div>

                        <q-space />

                        <q-btn flat round icon="fast_rewind" />
                        <q-btn flat round icon="pause" />
                        <q-btn flat round icon="fast_forward" />
                        
                    </q-card-section>
                </q-card>
            </q-dialog>
        

        
    </div>
</template>

<script> 
import {mapActions} from 'vuex'
import NotifyUsers from '../../../services/NotifyUser'

export default {
    data(){
        return{
            dialog: false
        }
    },
    props:['aeracao','isFlipped'],
    methods:{
        ...mapActions('aeracao',['update_infos_ambiente']),
        open (position) { 
            this.dialog = true
        },
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
