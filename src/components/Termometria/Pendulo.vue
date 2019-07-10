<template>
   <div>
    <span v-for="pendulo in pendulos" :key="pendulo.id_pendulo">
      {{pendulo.id_pendulo}}
      <termometria-sensores :sensores="pendulo.sensores" />
    </span>
  </div>
</template>

<script>
export default {
  props:['pendulos'],
}
</script>

<style lang="stylus">

</style>
