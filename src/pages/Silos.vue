<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <silos-container></silos-container>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
  export default{

    components:{
      'silos-container': require('components/Silos/Silos.vue').default
    }
  }
</script>
