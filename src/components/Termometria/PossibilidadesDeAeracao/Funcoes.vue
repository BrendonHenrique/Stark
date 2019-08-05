<template>
    <div class="col-11" :class="!isFlipped ? 'show' : 'hide'">
        <q-separator inset />
         
        <!-- <div class="row justify-inline q-gutter-lg">
              <q-input 
                v-for="item in aeracao.infos.ambiente"
                :key="item.label"
                suffix="%"
                bottom-slots 
                style="width: 5rem"  
                v-model="item.valor">
                <template v-slot:hint>
                    {{item.label}}
                </template>
            </q-input>
        </div> -->

        
    </div>
</template>

<script>
export default {
    props:['aeracao','isFlipped'],
    mounted(){ 
        console.log(this.aeracao.infos.ambiente)
    }
}
</script>

<style lang="stylus">
    .show
        display initial 

    .hide
        display none
</style>
