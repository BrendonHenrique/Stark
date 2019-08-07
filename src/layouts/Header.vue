<template>
 <div>
  <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
  <q-header elevated  class="primary">
    <q-toolbar>
        <q-btn flat class="left-nav-menu" @click="$emit('openDrawerLeft')" round dense icon="menu" />
        <q-toolbar-title class="menu-header text-h4 text-weight-thin">
          <slot>
          </slot>
        </q-toolbar-title>
        <q-btn flat @click="$emit('openDrawerRight')" round dense icon="person" />
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
