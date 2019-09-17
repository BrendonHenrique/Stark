<template>
<!-- Paginador dos silos na página de termometria -->
    <div class="paginador-de-silos-container">
        <q-card class="row bg-grey-5 ">
            <q-btn  flat @click="anterior()" 
            v-bind=podeNavegarParaTras class="navigate"
            icon="navigate_before" />
            <div class="absolute-center indice-paginador">
                <h6>
                Silo nº {{indice_paginador + 1}}
                </h6>
            </div>
            <q-space />
            <q-btn  class="navigate" flat  @click="proximo()" 
                v-bind=podeNavegarParaFrente icon="navigate_next"/>
        </q-card>
    </div>
<!--  -->
</template>

<script>
export default {
    props:['silos_length'],
    data(){
        return{
            indice_paginador: 0,
        }
    },
    computed:{
        podeNavegarParaTras(){
            return this.indice_paginador <= 0 ? {
                disable: true
            } : {
                disable: false
            }
        },
        podeNavegarParaFrente(){
            return this.indice_paginador >= this.silos_length - 1 ? {
                disable: true
            } : {
                disable: false
            }
        }
    },
    methods:{
        proximo(){
            this.indice_paginador++
            this.$emit('proximoSilo',this.indice_paginador)
        },
        anterior(){
            this.indice_paginador--
            this.$emit('siloAnterior',this.indice_paginador)
        },
    }
}
</script>

<style lang="stylus"> 

    .paginador-de-silos-container
        height 4rem
        width 100%
        z-index 5
        
        .q-card
            position relative
            height 4.2rem
            width  100%  
    
    .paginador-de-silos-container 
        .q-btn
            font-size 1rem

    .indice-paginador
        font-family 'Orbitron'
    
</style>