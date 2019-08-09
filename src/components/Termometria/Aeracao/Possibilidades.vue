<template>
  <q-list class="col-12">
    <q-separator inset />
    <q-item  v-for="item in possibilidades" 
    :key="item.label" class="bg-grey-1" clickable v-ripple>
      <q-item-section avatar class="q-mr-md">
        <q-btn dense round size="md" class="shadow-6" :color="item.isPossible ? 'positive' : 'negative' " />
      </q-item-section>
      <q-item-section class="text-grey-7">{{item.label}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  props:['possibilidades']
}
</script>

