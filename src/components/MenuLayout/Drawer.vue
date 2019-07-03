<template>
  <div id="layout-drawer">
    <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet">
    <q-drawer elevated bordered :value="drawerSide" content-class="bg-grey-3" :breakpoint="767"
    :width="250" :side="side">
      <slot>  </slot>
    </q-drawer>
  </div>
</template>

<script>
export default{
  props:['drawerSide','side']
}
</script>
<style>

  #layout-drawer{
  font-family: 'Orbitron', sans-serif;
  }

  .q-item:hover{
    background-color:black;
    transition: 0.6s;
  }

  .q-router-link--exact-active{
    border-right: 2px solid #303A42;
    color:RoyalBlue !important;
  }

</style>
