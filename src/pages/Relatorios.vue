<template>
  <div class="container">
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

<style scoped>

  .container {
      width: 30rem;
      height: 20rem;
      box-shadow: 0 0 1rem 0 rgba(255, 255, 255, .2);   
      border-radius: 5px;
      position: relative;
      z-index: 1;
      background: inherit;
      overflow: hidden;
  }

  .container:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(1000px);
  }

</style>