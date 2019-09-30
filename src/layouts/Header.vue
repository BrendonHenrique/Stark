<template>
  <q-header elevated>
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
      <q-toolbar>
          <q-btn flat class="left-nav-menu" @click="$emit('openDrawerLeft')" round dense icon="menu" />
          <q-toolbar-title class="menu-header text-h4 text-weight-thin">
            <slot>
            </slot>
          </q-toolbar-title>

          <div>
            <q-btn round icon="wifi" color="grey-10" :text-color="buttonWifiColor" />
            <q-tooltip :content-style="{fontSize: '18px', borderRadius: '10px'}">
              <p v-show="connectionStatus.isConnected">
                Conectado ao servidor
              </p>
              <p v-show="!connectionStatus.isConnected">
                Não conectado ao servidor, clique para tentar novamente
              </p>
            </q-tooltip>
          </div>

      </q-toolbar>
  </q-header>
</template>

<script>
  import ConnectionStatusController from '../controllers/ConnectionStatus/Controller'
  export default{
    data(){
      return{
        connectionStatus: {},
        buttonWifiColor: null
      }
    },
    mounted(){
      setInterval( () => {
        Object.assign(this.connectionStatus, ConnectionStatusController.getConnectionStatus())
        if(this.connectionStatus.isConnected){
          this.buttonWifiColor = 'green-13'
        }else{
          this.buttonWifiColor = 'white'
        }
      }, 5000)
    }
  }
</script>

<style lang="stylus">
  
  @media (max-width: 767px)
    .left-nav-menu
      display none

  .menu-header
    font-family 'Great Vibes'


</style>
