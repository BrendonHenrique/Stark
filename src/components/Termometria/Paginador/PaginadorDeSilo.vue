<template>
<!-- Paginador dos silos -->
    <div class="paginador-de-silos-container  row justify-center">
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

    ::-webkit-scrollbar {
        width: 2px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: $primary; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
    }

  @media (max-width: 767px)
    .paginador-de-silos-container
      
      .q-card
        position relative
        height 4.2rem
        width  100%  

      .q-btn
        font-size 1rem 
        height 100%
        width 20%

  @media screen and (min-width:768px)
    .paginador-de-silos-container
      .q-card
        position relative
        height 4.2rem
        width  100%  
       
      .q-btn
        font-size 1rem

    .paginador-de-silos-container   
        position relative
        height 4rem
        align-items flex-end
        margin-top 8px
     
  .indice-paginador
    font-family 'Orbitron'

</style>