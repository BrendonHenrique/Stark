<template>
  <q-list>
    <sequential-entrance delay="150" fromBottom>
    <q-item v-for="nav in navs" clickable exact class="text-grey-6 text-h7 text-thin"
    route :to="nav.to" :key="nav.label">
      <q-item-section avatar>
        <q-icon :name="nav.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{nav.label}}</q-item-label>
      </q-item-section>
    </q-item>
    </sequential-entrance>
  </q-list>
</template>
<script>

  export default{
    props:['navs']
  }
</script>
