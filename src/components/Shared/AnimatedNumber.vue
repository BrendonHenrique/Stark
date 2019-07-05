<template>
  <animated-number :value="value"
  :formatValue="formatToValue" :duration="duration" >
    <slot></slot>
  </animated-number>
</template>
<script>

import AnimatedNumber from "animated-number-vue";
export default{
  props:{
    value:{
      type: Number | String
    },
    duration:{
      type: Number,
      default: 800
    }
  },
  methods:{
    formatToValue(value){
      return `${value.toFixed(0)}`;
    }
  },
  components:{
    'animated-number':  AnimatedNumber,
  }
}

</script>
