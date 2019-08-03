<template>
  <div>
    <q-scroll-area style="height: 150px">
      <div>
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </div>
    </q-scroll-area>
    <div>
      <div style="max-width: 600px">
       
          <q-tabs
          dense
          v-model="tab"
          align="justify"
          class="text-grey-10 shadow-0 bg-grey-2"
          indicator-color="secondary"
          active-bg-color="grey-2"
        >
          <q-tab
          :ripple="{color: 'white' }"
          name="mails" icon="color_lens" label="Legenda">
          </q-tab>
          <q-tab 
          :ripple="{color: 'white' }"
          name="alarms" icon="alarm" label="Alarms">
          </q-tab>
          <q-tab 
          :ripple="{color: 'white' }"
          alert name="movies" icon="movie" label="Movies" />
        </q-tabs>
        
        <div class="q-gutter-y-sm">
          <q-tab-panels
            v-model="tab"
            animated
            transition-prev="scale"
            transition-next="scale"
            class="bg-purple text-white text-center"
          >
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
            </q-tab-panel>
          </q-tab-panels>

         </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    data(){
      return{
        tab: 'mails'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .q-tab--active
    background-color: $primary
</style>
