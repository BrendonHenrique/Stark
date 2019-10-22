<template>
  <div class='container-funcao-selecionada column items-center'>
    <span class="q-mb-sm" style="text-align: center;">
      Função selecionada
    </span>
    <div class="row">
      <strong class="q-mt-md text-h6">
        {{funcaoSelecionada | filterFuncaoAutomatica}}
      </strong>
      <q-icon v-show="funcaoSelecionada != '' " 
      color="red" class="icon-funcao-ativa" name="settings" />
    </div>
  </div>
</template>

<script>
export default {
    props:['funcaoSelecionada'],
    filters:{
        filterFuncaoAutomatica(newValue){
            if(newValue === 'Secagem' || newValue === 'Conservação'){
                return 'Automática'
            }else{
                return newValue;
            }
        }
    },
}

</script>
