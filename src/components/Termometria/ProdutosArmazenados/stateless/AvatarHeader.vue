<template functional>
     <div class="background-avatar">
        <q-card-section class="card-section-avatar row justify-center">
            <q-avatar class="avatar" size="160px">
                <slot>

                </slot>
            </q-avatar>
        </q-card-section>
    </div>
</template>

<script>
export default { 

}
</script>

<style lang="stylus">

    .background-avatar
        position relative
        background-size cover
        filter grayscale(50%)

    .card-section-avatar
        top 82px
        margin-bottom 7rem 
    
    div.avatar 
        font-size 160px
        border-radius 100%
        border 84px solid rgb(255,255, 255)
        .q-avatar__content
            position relative
            bottom 80px
            right 80px
</style>
