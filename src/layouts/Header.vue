<template>
  <q-header elevated>
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
      <q-toolbar>
          <q-btn flat class="left-nav-menu" @click="$emit('openDrawerLeft')" round dense icon="menu" />
          <q-toolbar-title class="menu-header text-h4 text-weight-thin">
            <slot>
            </slot>
          </q-toolbar-title>
      </q-toolbar>
  </q-header>
</template>
<style lang="stylus">

  
  @media (max-width: 767px)
    .left-nav-menu
      display none

  .menu-header
    font-family 'Great Vibes'

  .q-header
    height 4.5rem
    

</style>
