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

    <!-- Explicação sobre o card -->
     <q-banner dense class="bg-grey-3 q-pa-md">
      <template v-slot:avatar>
        <q-icon name="info" color="secondary" />
      </template>
      As possibilidades serão informadas pelo círculo colorido abaixo, quando for possível aerar o círculo 
      será verde se não for possível será vermelho.
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
import {mapGetters} from 'vuex';
export default {
  props:['index_silo'],
  data(){
    return{
      possibilidades: null
    }
  },
  methods: {
    getPossibilidadesDeAeracao(){
      this.possibilidades = this.get_possibilidades_de_aeracao(this.index_silo); 
    }
  }, 
  mounted(){
    this.getPossibilidadesDeAeracao();
  },
  watch:{
    index_silo(novoValor){
      this.getPossibilidadesDeAeracao();
    }, 
  },
  computed:{
    ...mapGetters('silos',['get_possibilidades_de_aeracao'])
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
