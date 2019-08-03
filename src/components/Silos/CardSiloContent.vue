<template>
  <div>

    <q-card-section style="height:220px;">
      <q-avatar  class="silo_avatar absolute-center" size="180px" color="secondary shadow-4 ">
        <q-img  src="assets/icons/silo.png" style="height: 180px;"  />
      </q-avatar>
      <q-chip color="accent" text-color="grey-4" class="silo_id"
        icon="info" size="10px" :label="`silo nº ${silo.id}`">
      </q-chip>
    </q-card-section>

    <sequential-entrance :delay="250" fromLeft>

      <section-layout class="card-infos">
        <template v-slot:avatar>
          <q-btn dense color="secondary" size="20px" round>
            <q-img  src="assets/icons/bag.svg" style="width: 30px;margin-left:2px"  />
          </q-btn>
        </template>
        <template v-slot:label>
          Quantidade aproximada de sacos - {{silo.quantidade_sacos}}
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
              Temperatura min - {{silo.sensor_temperatura.minima}} ºC
            </q-item-label>
            <q-item-label class="col">
              Temperatura média - {{silo.sensor_temperatura.media}} ºC
            </q-item-label>
            <q-item-label class="col">
              Temperatura max - {{silo.sensor_temperatura.maxima}} ºC
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
          Co2 - {{silo.sensor_co2}} ppm
        </template>
      </section-layout>

    </sequential-entrance>

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
