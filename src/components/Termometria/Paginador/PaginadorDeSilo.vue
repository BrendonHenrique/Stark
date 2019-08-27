<template>
<!-- Paginador dos silos -->
    <div class="paginador-de-silos  row justify-center">
        <q-card class="row bg-grey-5 ">
        <q-btn  flat @click="anterior()" 
        v-bind=podeNavegarParaTras class="navigate"
        icon="navigate_before" />
        <div class="absolute-center indice-paginador">
            <h6>
            {{indice_paginador + 1}}
            </h6>
        </div>
        <q-space />
        <q-btn  class=" navigate" flat  @click="proximo()" 
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
        //Paginador de navegação das termometrias dos silos   
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

  @media (max-width: 767px)
    .paginador-de-silos
      padding-bottom 10px
      
      .q-btn__content

      .q-card
        position relative
        height 4.2rem
        width  100%  

      .q-btn
        font-size 1.6rem 
        height 100%
        width 20%

  @media screen and (min-width:768px)
    .paginador-de-silos
      .q-card
        position relative
        height 3.5rem
        width  15rem
        border-radius 40px 
       
      .q-btn
        font-size 1rem

  .paginador-de-silos
    position fixed     
    bottom 65px
    right 0
    left 0
    z-index 999

  .indice-paginador
    font-family 'Orbitron'

</style>