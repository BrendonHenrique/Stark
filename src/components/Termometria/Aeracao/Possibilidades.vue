<template>
  <!-- Card de possibilidades de aeração -->
  <div>
    <!-- Header do card -->
    <q-banner dense class="bg-primary text-center" 
    inline-actions style="border-top-left-radius: 20px;">
      <span class="possibilidades-header text-grey-3 ">
        Possibilidades
      </span>
      <template v-slot:action>
        <q-img src="../../../assets/icons/possibilities.png" 
        style="width:36px;" />
      </template>
    </q-banner>
    <!--  -->
  
    <!-- Listagem das possibilidades de aeração com sinalização 
    vermelho(não é possivel aerar) verde(é possivel aerar)  -->
    <q-list class="possibilidades-container">
      <q-item class="possibilidades" 
      v-for="item in possibilidades" 
      :key="item.label" clickable v-ripple>
        <q-item-section avatar>
          <q-btn round size="md" class="shadow-7" :color="item.isPossible ? 'positive' : 'negative' " />
        </q-item-section>

        <span class="text-grey-9 possibiilidades-label">
          {{item.label}}
        </span>

      </q-item>
    </q-list>
    <!--  -->

  </div>
  <!--  -->
</template>

<script>
import SiloController from '../../../controllers/Silos/Controller'

export default {
  props:['index_silo'],
  data(){
    return{
      possibilidades: null
    }
  },
  methods: {
    getPossibilidadesDeAeracao(){
      this.possibilidades = SiloController.getPossibilidadesDeAeracao(this.index_silo)
    }
  }, 
  mounted(){
    this.getPossibilidadesDeAeracao()
  },
  watch:{
    index_silo(novoValor){
      this.getPossibilidadesDeAeracao()
    }, 
  }
}
</script>

<style scoped lang="stylus">

  .possibilidades-header
    font-family 'Libre Caslon Text', serif

  @media screen and (min-width:350px)
    .possibilidades-header
      font-size 1.20rem
      font-family 'Libre Caslon Text', serif
    
    
    .possibiilidades-label
      font-size 17px !important

  .possibiilidades-label
    font-size 19px
    padding 10px 0

  .possibilidades-container
    padding 5px 0

  .possibilidades
    padding 5px
    margin-bottom 15px

</style>
