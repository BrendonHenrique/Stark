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
    let api = new apiConnection()
    api.initConectionToServer()
  }
}
</script>
 