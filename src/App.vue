<template>
  <div id="q-app" >
    <router-view/>
  </div>
</template>

<script>
import apiConnection from './api/Api'

export default {
  name: 'App',
  mounted(){
    setInterval( () => {
      let api = new apiConnection() 
    }, 5000)
  }
}
</script>
 