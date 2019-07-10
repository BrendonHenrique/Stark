<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-ma-xs">
        <termometria-silo></termometria-silo>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  components:{
    'termometria-silo':require('components/Termometria/Termometria.vue').default
  }

}
</script>

<style lang="stylus">

</style>
