<template>
  <div class="q-mx-lg">
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="whatshot" color='red' />
      </template>
      <p class="text-grey-8">
          
      </p>
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
