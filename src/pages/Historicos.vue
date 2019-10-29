<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <!-- Tabs para navegação na página de configurações -->
          <q-tabs 
            dense inline-label v-model="tab" align="justify" 
            active-color="secundary" indicator-color="secundary"
            narrow-indicator class="historico-menu text-grey-4">
            <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label"  />
          </q-tabs>
        <!--  -->
         
        <q-tab-panels class="historico-content bg-grey-10" v-model="tab" > 

          <q-tab-panel  name="grafico" class="row justify-center align-center" style=""> 
            <graficos/>
          </q-tab-panel>

          <q-tab-panel  name="tabelas" class="row justify-center align-center"  style="">
            <tabelas />
          </q-tab-panel>
          
          <q-tab-panel  name="relatorios" class="row justify-center align-center"  style="">
            <relatorios />
          </q-tab-panel>

        </q-tab-panels>


      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data(){
    return{
      index_silo: 0,
      tab: 'tabelas',
      tabs:[
        {
          name:'grafico',
          label:'Gráficos'
        },
        {
          name:'tabelas',
          label:'Tabelas'
        },
        {
          name:'relatorios',
          label:'Relatórios'
        },
      ]
    }
  },
  mounted(){
    if(this.$route.params.id != undefined){
      this.index_silo = this.$route.params.id
    }
  },
  components:{
    'graficos': require('../components/Historicos/Graficos').default,
    'tabelas': require('../components/Historicos/Tabelas').default,
    'relatorios': require('../components/Historicos/Relatorios').default,
  }  
}
</script>

<style lang="stylus">

  .historico-menu 
    background-color $primary
    z-index 5
    font-family 'Libre Caslon Text', serif
  
  .historico-content 
    padding 10px

</style>