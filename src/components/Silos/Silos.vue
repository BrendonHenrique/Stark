<template>
  <q-list class="row">
    
    <!-- Silos -->
    <q-item class="justify-center col-xs-12 col-sm-6 col-md-4 col-lg-4" 
    v-for="(silo,index) in silos" :key="silo.id" style="padding: 20px 16px !important; transform: scale(0.9);">
      <q-card style="box-shadow:0 0 8px 1px #eae5e5;" class="card-silo shadow-10" :class="`silo-${index+1}`">

           <!-- Card header  -->
          <q-card-actions align="around" class="bg-secondary text-white">
            <div>
              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Visualizar pêndulos e sensores
              </q-tooltip>
              <q-btn round class="shadow-16" glossy icon="drag_indicator" size="18px" />
            </div>

            <div>
              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Relatórios
              </q-tooltip>
              <q-btn round class="shadow-16" glossy icon="assignment" size="18px" />
            </div>

            <div>
              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Visualizar mapa de calor 
              </q-tooltip>
              <q-btn round class="shadow-16" glossy icon="whatshot"  size="18px" @click="test(index)"/>
            </div>
          </q-card-actions>

        <!-- Card content -->
        <card-silo-content :silo="silo" />
      
      </q-card>
    </q-item>
    <!--  -->

  </q-list>
</template>

<script>
  import SiloController from '../../Controllers/Silos/Controller'
  import Vue from 'vue'
  export default{
    computed:{
      silos(){
        return SiloController.getSilos()
      }
    },  
    components:{
      'card-silo-content': require('./CardSiloContent.vue').default,
    }, 
    methods:{
      test(siloID){
        this.$router.push({ name: '/termometria', params: { id : siloID } })
      }
    }
  }
</script>

<style lang="stylus">

  .card-silo
    transition all .4s ease-in-out 
    border-radius 30px  
    font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    font-size 20px

  .card-silo:hover
    transform scale(1.05)
    cursor pointer
    -webkit-box-shadow 0 4px 20px 6px #B5B5B5
    box-shadow 0 4px 20px 6px #B5B5B5
    z-index 1
 
</style>
