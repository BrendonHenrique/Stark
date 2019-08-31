<template>
  <q-pagination
  v-model="indice"
  :max="aeradores_length"
  :direction-links="true"
  />
</template>

<script>

export default {
    props:['aeradores_length','id_aerador'],
    data(){
        return{
          indice: 1,
        }
    },
    updated(){
      this.$emit('updateId_aerador',this.indice)
    },  
}
</script>

<style lang="stylus" >

  @media (max-width: 767px)
    .paginador-de-aerador
      
      .q-card
        position relative
        height 4.2rem
        width  100%  

      .q-btn
        font-size 1rem 
        height 100%
        width 20%

  @media screen and (min-width:768px)
    .paginador-de-aerador
      .q-card
        position relative
        height 4.2rem
        width  100%  
       
      .q-btn
        font-size 1rem

    .paginador-de-aerador 
        position relative
        height 4rem
        align-items flex-end
        margin-top 8px
     
  .indice-paginador
    font-family 'Orbitron'

</style>