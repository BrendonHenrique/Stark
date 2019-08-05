<template>
 <div>
  <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
  <q-header elevated  class="primary">
    <q-toolbar>
      
      <div v-anime="{ duration: 2000,translateY:100 }">
        <q-btn flat class="left-nav-menu" 
        style="top:-100px;"
        @click="$emit('openDrawerLeft')" round dense icon="menu" />
      </div>

        <q-toolbar-title class="menu-header text-h4 text-weight-thin">
          <slot>
          </slot>
        </q-toolbar-title>
      <div v-anime="{ duration: 2000,translateY:100 }">
        <q-btn flat style="top:-100px;"
        @click="$emit('openDrawerRight')" round dense icon="person" />
      </div>
    </q-toolbar>
  </q-header>
 </div>
</template>
<style lang="stylus">

  @media (max-width: 767px)
    .left-nav-menu
      display none

  .menu-header
    font-family 'Great Vibes'

  .q-header
    height 5rem

</style>
