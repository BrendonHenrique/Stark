<template>

    <!-- Componente para controle de visualização do Flip-Card, baiscamente 
    cria duas faces para o card, uma na frente e o outra atrás , e ao clicar nos botões
    ele vira o card -->
    <div class="row justify-center  q-mb-lg view-controller ">
        
        <q-btn title="Ver possibilidades de aeração" style="z-index:3;" class="view-controler-button q-mr-lg"
        :push="view.Funcoes_card"  @click="$emit('changeView')" round >
            <q-img src="../../../assets/icons/possibilities.png" class="view-controler-image"/>
        </q-btn>
        
        <q-btn  title="Configurar aerador" style="z-index:3;" :push="view.Possibilidades_card" 
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