<template>
  <q-page>
    <div style="height: 5rem;" class="tab-menu">
      <q-tabs 
        dense inline-label v-model="tab" align="justify" narrow-indicator
        class="text-grey-4 menu-bar-configuraces" active-color="secundary" indicator-color="secundary">
        <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label" />
      </q-tabs>


    <q-tab-panels class="bg-grey-10" v-model="tab" style="margin-top: 5rem;" > 
    
      <q-tab-panel class="legenda-de-cores" name="cores" >
          <cores />
      </q-tab-panel>
      
    </q-tab-panels>


    </div>
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
        }
      ]
    }
  },
  components:{
    'cores': require('../components/Termometria/LegendaDeCores/Cores').default,
  }  
}
</script>

<style lang="stylus" >

  .menu-bar-configuraces
    position fixed
    top 3.8rem
    left 0px
    right 0
    background-color $primary
    z-index 4
    font-family 'Libre Caslon Text', serif

</style>
