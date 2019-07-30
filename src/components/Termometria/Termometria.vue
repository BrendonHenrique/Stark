<template>
  <div class="row no-wrap justify-between" >
      <div
        class="column reverse pendulo "
        :key="termometria.id_pendulo"
        v-for="termometria in termometrias">
        <q-btn round class="text-thin text-h6 text-center q-mt-xs" size="15px">
          p{{termometria.id_pendulo}}
        </q-btn>
        <sequential-entrace  style="overflow: hidden;" :delay="150">
          <div
            v-for="sensor in termometria.sensores"
            :key="sensor.id_sensor">
            <q-chip class="q-mt-sm">
              <q-avatar color="grey" text-color="white">
                {{sensor.id_sensor}}
              </q-avatar>
              {{sensor.temperatura}}
            </q-chip>
          </div>
        </sequential-entrace>  
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
  components:{
    'sequential-entrace': require('../Shared/SequentialEntrace').default
  }
}
</script>

<style lang="stylus" scoped>
  .pendulo
    border-width 2px  
    border-style dashed
    border-color #C3C3C3
    border-radius 80px
    align-items center
    width 130px
    padding 15px
    margin 10px 

  .q-chip::after
    content: "|"
    position absolute 
    top 28px
    left 37px
    color grey

</style>
