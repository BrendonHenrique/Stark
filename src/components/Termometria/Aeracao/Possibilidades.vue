<template>
  <div>
    <q-banner dense class="bg-primary text-center" 
    inline-actions style="border-top-left-radius: 20px;">
        <span class="possibilidades-header text-h6 text-grey-3 ">
          Possibilidades
        </span>
      <template v-slot:action>
        <q-img src="../../../assets/icons/possibilities.png" 
        style="width:36px;" />
      </template>
    </q-banner>
  
    <q-list class="possibilidades-container">
      <q-item class="possibilidades" v-for="item in possibilidades" 
      :key="item.label" clickable v-ripple>
        <q-item-section avatar>
          <q-btn round size="md" class="shadow-7" :color="item.isPossible ? 'positive' : 'negative' " />
        </q-item-section>

        <span class="text-grey-9 possibiilidades-label">
          {{item.label}}
        </span>

      </q-item>
    </q-list>

  </div>
</template>

<script>
export default {
  props:['possibilidades']
}
</script>

<style scoped lang="stylus">

  @media screen and (min-width:350px)
    .possibilidades-header
      font-size 1rem
    
    .possibiilidades-label
      font-size 17px !important


  .possibiilidades-label
    font-size 19px
    padding 10px 0

  .possibilidades-container
    padding 5px 0

  .possibilidades
    padding 5px
    margin-bottom 15px

</style>
