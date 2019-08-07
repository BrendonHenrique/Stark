<template>
    <section>
        <div class="location">
        <div class="text-center text-h4">
          <slot>

          </slot>
        </div>
        <q-separator spaced color="grey-6" />
         {{ location }}
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

 .weather__description
    text-transform lowercase
    margin-left 10%
    margin-right 10%
    text-align center


</style>
