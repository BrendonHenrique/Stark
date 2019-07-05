<template>
  <div id="layout-drawer">
    <q-drawer elevated bordered :value="drawerSide" content-class="bg-grey-3" :breakpoint="767"
    :width="220" :side="side">
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

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');


  #layout-drawer{
  font-family: 'Orbitron', sans-serif;
  }

  .q-router-link--exact-active{
    border-right: 2px solid #303A42;
    color:rgb(87, 110, 129) !important;
  }

  .q-item--clickable {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    background: #f0eded;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.7s;
    transition-duration: 0.7s;
  }

  .q-item--clickable:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(227, 227, 230);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .q-item--clickable:hover:before, .q-item--clickable:focus:before, .q-item--clickable:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }


</style>
