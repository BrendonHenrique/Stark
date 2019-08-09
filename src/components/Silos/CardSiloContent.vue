<template>
  <div class="bg-grey-3">

    <q-card-section style="height:220px;">
      <q-avatar  class="silo_avatar absolute-center" size="180px" color="secondary shadow-4 ">
        <q-img  src="assets/icons/silo.png" style="height: 180px;"  />
      </q-avatar>
      <q-chip color="accent" text-color="grey-4" class="silo_id"
        icon="info" size="10px" :label="`silo nº ${silo.id}`">
      </q-chip>
    </q-card-section>

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
                <div class="text-grey-8">{{silo.sensor_temperatura.minima}} ºC</div>
            </div>
          </q-item-label>
          
          <q-item-label class="col">  
            <div>
                <div class="text-weight-thin">Temperatura média</div>
                <div class="text-grey-8">{{silo.sensor_temperatura.media}} ºC</div>
            </div>
          </q-item-label>

          <q-item-label class="col">
            <div>
                <div class="text-weight-thin">Temperatura max</div>
                <div class="text-grey-8">{{silo.sensor_temperatura.maxima}} ºC</div>
            </div>
          </q-item-label>

        </div>
      </template>
    </section-layout>

    <section-layout class="card-infos">
      <template v-slot:avatar>
        <q-btn dense color="secondary" size="20px" round icon="" >
          <q-img  src="assets/icons/co2.svg" style="width: 40px;"  />
        </q-btn>
      </template>
      <template v-slot:label>
        <div>
            <div class="text-weight-thin">Co2 </div>
            <div class="text-grey-8">{{silo.sensor_co2}} ppm</div>
        </div>
      </template>
    </section-layout>

  </div>
</template>

<script>
  export default{
    props:['silo'],
    components:{
      'section-layout': require('components/Silos/SectionLayout.vue').default,
      'sequential-entrace': require('components/Shared/SequentialEntrace.vue').default,
    },
    mounted(){
      console.log(this.silo.termometria)
    }
  }
</script>

<style lang="stylus">

  div.card-infos
    overflow hidden

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
