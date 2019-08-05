<template>
  <div class="q-mx-lg">
    <q-banner style="height:50vh;border-radius:20px;box-shadow:3px 3px 10px 2px #FFFFFF" class="bg-grey-3">

      <div class="row justify-center">
        
      </div>  
    </q-banner>
  </div>
</template>

<script>

  import {
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters('legenda_de_cores', ['gradiente_de_temperatura'])
    }
  }

</script>

<style>

</style>
