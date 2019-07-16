<template>
  <div>
    <q-btn round icon="person" class="fixed-center"
    @click="$emit('update:count',!count)" />
    <h6 class="text-center">
        {{count}}
    </h6>

  </div>
</template>

<script>
export default {
  props:['count']
}
</script>

<style>

</style>
