<template>
  <div class="bg-grey-3">

    <!-- Avatar com a imagem do silo e numeração do silo -->
    <q-card-section style="height:220px;">
      <q-avatar  class="silo_avatar absolute-center" size="180px" color="secondary shadow-4 ">
        <q-img  src="assets/icons/silo.png" style="height: 180px;"  />
      </q-avatar>
      <q-chip color="accent" text-color="grey-4" class="silo_id"
        icon="info" size="10px" :label="`silo nº ${silo.id + 1}`">
      </q-chip>
    </q-card-section>
    <!--  -->
    
    <main>
        
      <!-- Quantidade de sacos -->
      <section-layout class="card-infos">
        <template v-slot:avatar>
          <q-btn dense color="secondary" size="20px" round>
            <q-img  src="assets/icons/bag.png" style="width: 30px;margin-left:2px"  />
          </q-btn>
        </template>
        <template v-slot:label>
          <div>
            <div class="text-weight-thin">Quantidade aproximada de sacos</div>
            <div class="text-grey-8">{{silo.quantidade_sacos}}</div>
          </div>
          </template>
      </section-layout>
      <!--  -->

      <!-- Temperaturas mínima , média e máxima -->
      <section-layout class="card-infos">
        <template v-slot:avatar>
          <q-btn dense color="secondary"  size="20px" round >
            <q-img  src="assets/icons/warm.svg" style="width: 40px;margin-left:4.7px"  />
          </q-btn>
        </template> 

        <template v-slot:label class="row">
          <div class="column items-start">
              
            <q-item-label class="col">
              <div>
                <div class="text-weight-thin">Temperatura min</div>
                <div class="text-grey-8">{{silo.temperatura.minima}} ºC</div>
              </div>
            </q-item-label>
            
            <q-item-label class="col">  
              <div>
                <div class="text-weight-thin">Temperatura média</div>
                <div class="text-grey-8">{{silo.temperatura.media}} ºC</div>
              </div>
            </q-item-label>

            <q-item-label class="col">
              <div>
                <div class="text-weight-thin">Temperatura max</div>
                <div class="text-grey-8">{{silo.temperatura.maxima}} ºC</div>
              </div>
            </q-item-label>

          </div>
        </template>

      </section-layout>
      <!--  -->

      <!-- Co2 -->
      <section-layout class="card-infos">
        <template v-slot:avatar>
          <q-btn dense color="secondary" size="20px" round icon="" >
            <q-img  src="assets/icons/co2.svg" style="width: 40px;"  />
          </q-btn>
        </template>
        <template v-slot:label>
          <div>
              <div class="text-weight-thin">Co2 </div>
              <div class="text-grey-8">{{silo.co2}} ppm</div>
          </div>
        </template>
      </section-layout>
      <!--  -->

    </main>

  </div>
</template>

<script>
  import SiloController from '../../Controllers/Silos/Controller'
  export default{
    props:['silo'], 
    mounted(){
      SiloController.updateMinMedMaxTemp(this.silo.id)
    },
    components:{
      'section-layout': require('components/Silos/SectionLayout.vue').default,
      'sequential-entrace': require('components/Shared/SequentialEntrace.vue').default,
    }
  }
</script>

<style lang="stylus">

  .silo_id
    position absolute
    bottom 0
    right 10px

  .q-card
    font-family 'Orbitron', sans-serif

  .card-silo 
    .q-card__section
      padding 13px

</style>