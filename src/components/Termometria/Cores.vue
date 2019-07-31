<template>
  <div class="row justify-center legenda-de-cores">
    <q-card class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-10 col-lg-5" style="border-radius:10px;">
        <div class="row q-px-md q-pt-md" v-for="item in cores" :key="item.label">
            <q-input filled v-model="item.valor" class="col-12 " :label="item.label">
                <template v-slot:append>
                    <q-btn round :style="{'background-color': item.valor}">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-color no-header v-model="item.valor" />
                        </q-popup-proxy>
                    </q-btn>
                </template>
            </q-input>
        </div>
        <div class="row justify-end q-pa-lg">
            <q-btn label="salvar" icon-right="save" />
        </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cores: [
        {
          label: "Curto",
          valor: ""
        },
        {
          label: "Aberto",
          valor: ""
        },
        {
          label: "Não lido por chaveador",
          valor: ""
        },
        {
          label: "Falha chaveador",
          valor: ""
        },
        {
          label: "Sem nível de produto",
          valor: ""
        },
        {
          label: "Gradiente de temperatura 1",
          valor: ""
        },
        {
          label: "Gradiente de temperatura 2",
          valor: ""
        },
        {
          label: "Sensor Erro",
          valor: ""
        }
      ]
    };
  }, 
};
</script>

<style lang="stylus" >
  .legenda-de-cores
    animation entry 1s
</style>
