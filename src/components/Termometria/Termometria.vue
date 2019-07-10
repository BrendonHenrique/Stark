<template>
  <div class="row">
    <div
      class="column reverse "
      v-for="termometria in termometrias"
      :key="termometria.id_pendulo">

      <p class="text-thin text-h6 text-center ">
        P{{termometria.id_pendulo}}
      </p>

      <div
        v-for="sensor in termometria.sensores"
        :key="sensor.id_sensor"
        class="q-mx-xs">
        <q-chip>
          <q-avatar color="grey" text-color="white">
            {{sensor.id_sensor}}
          </q-avatar>
          {{sensor.temperatura}}
        </q-chip>
        <br>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props:[],
  computed:{
    ...mapGetters('termometrias',['termometrias']),
  },
  mounted(){
    console.log(this.termometrias)
  },
  components:{
    'termometria-pendulos':require('components/Termometria/Pendulo.vue').default
  }
}
</script>

<style lang="stylus">

</style>

