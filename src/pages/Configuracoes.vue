<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <configurador />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components:{
    'configurador': require('../components/Configuracoes/Configurador').default
  }  
}
</script>
