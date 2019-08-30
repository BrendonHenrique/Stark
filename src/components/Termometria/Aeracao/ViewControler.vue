<template>

    <!-- Componente para controle de visualização do Flip-Card, ele vira o flip-card -->
    <div class="row justify-center  q-mb-lg view-controller ">

        <q-btn style="z-index:3;" class="view-controler-button q-mr-lg"
        :push="view.Funcoes_card"  @click="$emit('changeView')" round >
            <q-img src="../../../assets/icons/possibilities.png" class="view-controler-image"/>
        </q-btn>
            
        <q-btn style="z-index:3;" :push="view.Possibilidades_card" 
        @click="$emit('changeView')" round >
            <q-img src="../../../assets/icons/settings.png" class="view-controler-image" />
        </q-btn>

    </div>
    <!--  -->

</template>

<script>
export default {
    props:['view']
}
</script>

<style  scoped lang="stylus">
    
    .view-controller
        z-index: 1
    .view-controler-image 
        width 26px 
        color grey
         
</style>