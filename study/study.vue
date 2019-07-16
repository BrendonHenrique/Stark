<template >
  <div class="fixed-center" :style="{'background-color':color}" style="height:100%; width:100%;" >
    <input  class="fixed-center" type="color" style="height:40px; width:35px;" v-model="color" />
    <q-input  class="fixed-center" v-model="color" type="text" style="margin-left:110px;" />
  </div>
</template>

<script>
export default {

  data(){
    return{
      color: ''
    }
  },
  components:{
    'child':require('./studychild.vue').default
  }
}
</script>


</style>
