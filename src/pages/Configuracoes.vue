<template>
  <q-page>
    <div class="tab-menu">
      <!-- Tabs para navegação na página de configurações -->
      <q-tabs 
        dense inline-label v-model="tab" align="justify" narrow-indicator
        class="text-grey-4 menu-bar-configuraces" active-color="secundary" indicator-color="secundary">
        <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label" />
      </q-tabs>
      <!--  -->
    </div>

    <q-tab-panels class="bg-grey-10 q-pt-sm" v-model="tab" > 

      <!-- Acesso as configurações de cores  -->
      <q-tab-panel name="cores" >
          <cores />
      </q-tab-panel>
      <!--  -->

      <!-- Acesso as configurações dos silos  -->
      <q-tab-panel name="configuracoes-silo" >
          <configurador-silos />
      </q-tab-panel>
      <!--  -->
      
    </q-tab-panels>

  </q-page>
</template>

<script>
export default {
  data(){
    return{
      tab: 'cores',
      tabs: [
        {
          name:'cores',
          label:'Legenda de cores'
        },
        {
          name:'configuracoes-silo',
          label:'Configurações do silo'
        }
      ]
    }
  },
  components:{
    'cores': require('../components/Termometria/LegendaDeCores/Cores').default,
    'configurador-silos': require('../components/Silos/Configurador').default,
  }  
}
</script>

<style lang="stylus" >

  .menu-bar-configuraces
    background-color $primary
    z-index 5
    font-family 'Libre Caslon Text', serif
 
</style>
