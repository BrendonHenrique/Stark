<template>
  <div>
    
    <q-banner dense class="bg-primary text-center" 
    inline-actions style="border-top-left-radius: 20px;">
        <span class="text-h5 text-grey-3 ">
          Possibilidades
        </span>
      <template v-slot:action>
        <q-img src="../../../assets/icons/possibilities.png" 
        style="width:36px;color:grey;" />
      </template>
    </q-banner>
  
    <q-card-section>
    
      
      <q-list>
        <q-item  v-for="item in possibilidades" 
        :key="item.label" clickable v-ripple>
          <q-item-section avatar>
            <q-btn round size="md" class="shadow-7" :color="item.isPossible ? 'positive' : 'negative' " />
          </q-item-section>
          <q-item-section class="text-grey-9">{{item.label}}</q-item-section>
        </q-item>
      </q-list>
  
    </q-card-section>

  </div>
</template>

<script>
export default {
  props:['possibilidades']
}
</script>
