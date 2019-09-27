<template>
  <q-list class="row">
    
    <!-- Silos -->
    
    <q-item class="justify-center col-xs-12 col-sm-6 col-md-4 col-lg-4" 
    v-for="(silo,index) in silos" :key="silo.id" style="transform: scale(0.95);">
        <q-card class="card-silo" :class="`silo-${index+1}`">

            <!-- Card header  -->
            <q-card-actions align="around" class="text-white" style="box-shadow" >
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
                <q-btn round class="shadow-16" glossy size="18px" @click="verProdutoArmazenado(index)">
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
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);   
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    font-size 20px

  .card-silo:before 
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5);
    filter: blur(10px);
    overflow: hidden;

  .card-silo:hover
    transform scale(1.05)
    cursor pointer
    -webkit-box-shadow 0 4px 20px 6px #B5B5B5
    box-shadow 0 4px 20px 6px #B5B5B5
    z-index 1
 
</style>
