<template>

  <!-- Card actions com evento para redirecionar o usuário apartir do card do silo -->
  <q-card-actions align="around" class="text-white" style="box-shadow">

    <!-- Enviar para página dos pendulos -->
    <div>
      <q-tooltip :content-style="tooltipStyle">
        Visualizar sensores
      </q-tooltip>
      <q-btn round class="shadow-16" glossy icon="drag_indicator" size="18px" @click="verPendulos(index)" />
    </div>
    <!--  -->

    <!-- enviar para os históricos -->
    <div>
      <q-tooltip :content-style="tooltipStyle">
        Históricos
      </q-tooltip>
      <q-btn round class="shadow-16" glossy icon="assignment" size="18px" @click="verHistoricos(index)" />
    </div>
    <!--  -->

    <!-- enviar para o mapa de calor -->
    <div>
      <q-tooltip :content-style="tooltipStyle">
        Visualizar mapa de calor
      </q-tooltip>
      <q-btn round class="shadow-16" glossy icon="whatshot" size="18px" @click="verMapaDeCalor(index)" />
    </div>
    <!--  -->

    <!-- enviar para ver o produto armazenado -->
    <div>
      <q-tooltip :content-style="tooltipStyle">
        Visualizar produto armazenado
      </q-tooltip>
      <q-btn round class="shadow-16" glossy size="18px" @click="verProdutoArmazenado(index)">
        <q-img src="assets/icons/agronomy.svg" style="left:1px;" />
      </q-btn>
    </div>
    <!--  -->

    <!-- ver o aerador (possibilidades de aeração e funções de aeração) -->
    <div>
      <q-tooltip :content-style="tooltipStyle">
        Visualizar aerador
      </q-tooltip>
      <q-btn round class="shadow-16" glossy size="18px" @click="verAerador(index)">
        <q-img src="assets/icons/fan.svg" style="left:1px;" />
      </q-btn>
    </div>
    <!--  -->

  </q-card-actions>
  <!--  -->
</template>

<script>
  export default {
    data() {
      return {
        tooltipStyle: {
          fontSize: '20px',
          borderRadius: '20px'
        }
      }
    },
    props: ['index'],
    // eventos de redirecionamento com router
    methods: {
      verMapaDeCalor(id) {
        this.$router.push({
          name: 'termometria',
          params: {
            id,
            viewType: 'mapaDeCalor'
          }
        });
      },
      verPendulos(id) {
        this.$router.push({
          name: 'termometria',
          params: {
            id,
            viewType: 'pendulos'
          }
        });
      },
      verProdutoArmazenado(id) {
        this.$router.push({
          name: 'termometria',
          params: {
            id,
            viewType: 'produtoArmazenado'
          }
        });
      },
      verAerador(id) {
        this.$router.push({
          name: 'termometria',
          params: {
            id,
            viewType: 'aerador'
          }
        });
      },
      verHistoricos(id) {
        this.$router.push({
          name: 'historicos',
          params: {
            id
          }
        });
      }
    }
  }

</script>
