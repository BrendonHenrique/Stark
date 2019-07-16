<template>
  <div class="row justify-center">
    <div
      class="column reverse "
      :key="termometria.id_pendulo"
      v-for="termometria in termometrias">
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
  }
}
</script>

<style lang="stylus" scoped>
  div.row
    flex-wrap nowrap


</style>
