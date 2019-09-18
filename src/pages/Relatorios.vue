<template>
  <div>
    {{index_silo}}
  </div>

</template>

<script>
export default {
  data(){
    return{
      index_silo: 0
    }
  },
  mounted(){
    if(this.$route.params.id != undefined){
      this.index_silo = this.$route.params.id
    }
  }  
}
</script>

<style>

</style>