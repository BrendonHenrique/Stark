<template>
  <div class="bg-grey-3 card-content">

    <!-- Avatar com a imagem do silo e numeração do silo -->
    <q-card-section style="height:220px;">
      <q-avatar  
      class="silo_avatar absolute-center " 
      style="margin:8px 0;" size="210px" color="bg-grey-4 shadow-6">
        <q-img  src="assets/icons/silo.svg" style="height: 180px;width:180px;"  />
      </q-avatar>
      <!-- Numeração -->
      <q-chip color="accent" text-color="grey-4" class="silo_id"
        icon="info" size="10px" :label="`silo nº ${silo.id + 1}`">
      </q-chip>
    </q-card-section>
    <!--  -->
    
    <!-- Informações de cada silo -->
    <main>  
      <section-layout class="card-infos">
        <template v-slot:avatar>
          <q-btn glossy dense color="secondary" size="20px" round>
            <q-img  src="assets/icons/bag.png" style="width: 30px;margin-left:2px"  />
          </q-btn>
        </template>
      <!-- Quantidade de sacos -->
        <template v-slot:label>
          <div>
            <div class="text-weight-thin">Quantidade aproximada de sacos</div>
            <div class="text-grey-8">{{silo.quantidade_sacos}}</div>
          </div>
          </template>
      </section-layout>
      <!--  -->

      <!-- Temperaturas mínima , média e máxima -->
      <section-layout class="card-infos">
        
        <!-- Avatar -->
        <template v-slot:avatar>
          <q-btn glossy  dense color="secondary"  size="20px" round >
            <q-img src="assets/icons/warm.svg" style="width: 40px;margin-left:4.7px"  />
          </q-btn>
        </template>
         <!--  -->

        <!-- Temperaturas -->
        <template v-slot:label class="row">
          <div class="column items-start">
            <q-item-label class="col" :style="tempBorder(silo.temperatura.minima)">
                <div class="text-weight-thin">Temperatura min</div>
                <div class="text-grey-8">{{silo.temperatura.minima}} ºC</div>
            </q-item-label>
            <q-item-label class="col" :style="tempBorder(silo.temperatura.media)">  
                <div class="text-weight-thin">Temperatura média</div>
                <div class="text-grey-8">{{silo.temperatura.media}} ºC</div>
            </q-item-label>
            <q-item-label class="col" :style="tempBorder(silo.temperatura.maxima)">
                <div class="text-weight-thin">Temperatura max</div>
                <div class="text-grey-8">{{silo.temperatura.maxima}} ºC</div>
            </q-item-label>
          </div>
        </template>
        <!--  -->

      </section-layout>
      <!--  -->

    </main>
    <!--  -->

  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  export default{
    props:['silo'], 
    mounted(){
      this.update_min_med_max_temp(this.silo.id);      
    },
    components:{
      'section-layout': require('components/Silos/stateless/SectionLayout.vue').default,
      'sequential-entrace': require('components/Shared/SequentialEntrace.vue').default,
    }, 
    computed:{
      ...mapGetters('configuracoes',['parse_temp_to_color']),
      configuracoesDeCores(){
        return this.$store.state.configuracoes.configuracoes_de_cores;
      }
    },
    methods:{
      ...mapActions('silos',['update_min_med_max_temp']),
      tempBorder(temp){
        return {
          borderLeft: `7px solid ${this.parse_temp_to_color(temp/this.configuracoesDeCores.temperatura_alta) }`,
          paddingLeft: '3px'
        };
      },
      badgeColor(temp){
        return {
          backgroundColor: `${this.parse_temp_to_color(temp/this.configuracoesDeCores.temperatura_alta)}`,
        };
      }
    }
  }
</script>

<style lang="stylus">
  .silo_id
    position absolute
    bottom 0
    right 10px

  .card-content
    box-shadow 1px -1px 5px 1px #fff !important
      
  .card-silo 
    .q-card__section
      padding 13px
</style>