<template>
  <q-page class="termometria-container">
    
    <div style="height: 5rem;" class="tab-menu">
      <q-tabs 
        dense inline-label v-model="tab" align="justify" narrow-indicator
        class="text-grey-4 menu-bar" active-color="secundary" indicator-color="secundary">
        <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label" />
      </q-tabs>
    </div>
    
    <q-tab-panels class="bg-grey-10" v-model="tab"  > 
    
      <q-tab-panel class="termometria-panel" name="termometria" >
          <termometria-silo />
      </q-tab-panel>

      <q-tab-panel name="prod_armazenado" >
          <produto-armazenado />
      </q-tab-panel>
        
      <q-tab-panel name="historico">
        <!-- <historico /> -->
      </q-tab-panel>

      <q-tab-panel name="aeracao">
          <aeracao />
      </q-tab-panel>
      
      <q-tab-panel name="cores">
          <cores />
      </q-tab-panel>
      
    </q-tab-panels>
  
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      tab: 'termometria',
      tabs: [
        {
          name:'termometria',
          label:'Termometria'
        },
        {
          name:'prod_armazenado',
          label:'Produto armazenado'
        },
        {
          name:'historico',
          label:'Histórico'
        },
        {
          name:'aeracao',
          label:'Aeração'
        },
        {
          name:'cores',
          label:'Legenda de cores'
        }
      ]

    }
  },
  components:{
    'termometria-silo':require('../components/Termometria/Main/Termometria').default,
    'produto-armazenado':require('../components/Termometria/ProdutosArmazenados/ProdutosArmazenados').default,
    'historico': require('../components/Termometria/Historico/Historico').default,
    'aeracao': require('../components/Termometria/Aeracao/Aeracao').default,
    'cores': require('../components/Termometria/LegendaDeCores/Cores').default,
  }

}
</script>

<style lang="stylus">
  
  .menu-bar
    position fixed
    top 3.8rem
    left 0px
    right 0
    background-color $primary
    z-index 4
    font-family 'Libre Caslon Text', serif
  
</style>
