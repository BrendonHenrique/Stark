<template>
  <!-- Page é renderizada quando o dominio é acessado com rota diferente das listadas em routes -->
  <div class="fixed-center text-center">
    <p>
      <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
    </p>
    <p class="text-faded">Não temos nenhum conteúdo aqui...</p>
    <q-btn color="secondary" style="width:200px;" @click="$router.push('/')">
      Voltar
    </q-btn>
  </div>
</template>
