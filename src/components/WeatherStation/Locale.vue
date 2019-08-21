<template>
    <section>
      <div class="location q-mt-lg">
        <div class="text-center text-h4">
          <slot>

          </slot>
        </div>
        <q-separator spaced color="grey-6" />

        <!-- Localização atual pega pela geolocalização do browser -->
        {{ location }}
        <!--  -->

      </div>
      <img class="weather__icon" :src="icon">
    </section>
</template>

<script>
export default {
  props: ['location','icon']
}
</script>

<style scoped lang="stylus">

  section
    display flex
    flex-direction column
    align-items center

 .location
    text-transform uppercase
    font-weight bold
    font-size 20px
  
  .weather__icon
    width 160px

</style>
