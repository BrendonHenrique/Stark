<template>
  <q-list> 
    <q-item 
    style="border-bottom: 0.2px solid #494949;"
    v-for="nav in navs" clickable exact class="text-grey-4 text-h7 text-thin"
    route :to="nav.to" :key="nav.label">
      <q-item-section avatar>
        <q-icon size="40px" :name="nav.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-h5 text-weight-thin">{{nav.label}}</q-item-label>
      </q-item-section>
    </q-item> 
  </q-list>
</template>
<script>

  export default{
    props:['navs']
  }
</script> 

<style lang="stylus" scoped>

</style>

