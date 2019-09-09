<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <silos />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
  export default{
    components:{
      'silos': require('components/Silos/Silos.vue').default
    }
  }
</script>
