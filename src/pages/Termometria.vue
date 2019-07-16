<template>
  <div class="container ">
    <div class="row justify-center">
      <q-card class="bg-primary col-md-12 col-lg-8 col-sm-12 col-xs-12" style="border-radius:0px" >
        <q-tabs
          dense
          inline-label
          v-model="tab"
          align="justify"
          narrow-indicator
          class="text-grey-4"
          active-color="secundary"
          indicator-color="secundary"
        >
          <q-tab name="termometria" label="Termometria" />
          <q-tab name="historico" label="Histórico" />
          <q-tab name="prod_armazenado" label="Produto armazenado" />
          <q-tab name="aeracao" label="Possibilidades de aeração" />
          <q-tab name="cores" label="Legenda de cores" />
        </q-tabs>

        <q-separator class="q-mt-xs" />

        <q-tab-panels v-model="tab" animated>

          <q-tab-panel class="termometria-panel" name="termometria">
            <termometria-silo></termometria-silo>
          </q-tab-panel>

          <q-tab-panel name="prod_armazenado">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="aeracao">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="cores">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="historico">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tab: 'termometria'
    }
  },
  components:{
    'termometria-silo':require('components/Termometria/Termometria.vue').default
  }

}
</script>

<style lang="stylus" scoped>

  .q-card
    font-family 'Orbitron', sans-serif

  .termometria-panel
    width 200%

</style>
