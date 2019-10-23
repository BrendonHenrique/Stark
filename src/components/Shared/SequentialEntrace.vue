<template>
    <sequential-entrance fromTop animation="bounceIn" :delay="delay">
      <slot></slot>
    </sequential-entrance>
</template>

<script>
import Vue from 'vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);
export default{
  props:['delay'], 
}
</script>
