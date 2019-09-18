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
                Visualizar sensores
              </q-tooltip>
              <q-btn round class="shadow-16" glossy icon="drag_indicator" size="18px" @click="verPendulos(index)"/>
            </div>

            <div>
              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Relatórios
              </q-tooltip>
              <q-btn round class="shadow-16" glossy icon="assignment" size="18px" @click="verRelatorios(index)" />
            </div>

            <div>
              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Visualizar mapa de calor 
              </q-tooltip>
              <q-btn round class="shadow-16" glossy icon="whatshot"  size="18px" @click="verMapaDeCalor(index)"/>
            </div>
            
            <div>
              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Visualizar produto armazenado  
              </q-tooltip>
              <q-btn round class="shadow-16" glossy size="19px" @click="verProdutoArmazenado(index)">
                <q-img  src="assets/icons/agronomy.svg" style="left:1px;" />
              </q-btn>
            </div>
            <div>

              <q-tooltip :content-style="{fontSize: '20px', borderRadius: '20px'}">
                Visualizar aerador 
              </q-tooltip>
              <q-btn round class="shadow-16" glossy size="18px" @click="verAerador(index)">
                <q-img  src="assets/icons/fan.svg" style="left:1px;" />
              </q-btn>
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
      verMapaDeCalor(id){
        this.$router.push({ name: 'termometria', params: { id, viewType: 'mapaDeCalor'} })
      },
      verPendulos(id){
        this.$router.push({ name: 'termometria', params: { id, viewType: 'pendulos'} })
      },
      verProdutoArmazenado(id){
        this.$router.push({ name: 'termometria', params: { id, viewType: 'produtoArmazenado'} })
      },
      verAerador(id){
        this.$router.push({name: 'termometria', params: { id, viewType: 'aerador'}})
      },
      verRelatorios(id){
        this.$router.push({name: 'relatorios', params: { id }})
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
