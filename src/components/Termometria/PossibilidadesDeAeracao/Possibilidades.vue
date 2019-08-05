<template>
  <q-list class="col-12">
    <q-separator class="q-mb-md" inset />
    <q-item dense v-for="item in possibilidades" 
    :key="item.label" class="bg-grey-1 q-mb-xs" clickable v-ripple>
      <q-item-section avatar class="q-mr-md">
        <q-btn round size="sm" :color="item.isPossible ? 'positive' : 'negative' " />
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

