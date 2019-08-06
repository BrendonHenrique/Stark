<template>
    <div class="row justify-center q-gutter-lg">
        <q-btn style="position:relative;top:7rem;z-index:4;"  
            :push="view.Funcoes_card" 
            @click="$emit('changeView')"
            round >
            <q-img src="../../../assets/icons/possibilities.png" 
                style="width:26px;color:grey;position:relative;left:.4px;top:1px;" />
        </q-btn>
            
        <q-btn style="position:relative;top:7rem;z-index:4;" 
        :push="view.Possibilidades_card " 
        @click="$emit('changeView')"
        round >
            <q-img src="../../../assets/icons/settings.png" 
            style="width:26px;color:grey;position:relative;left:.4px;top:1px;" />
        </q-btn>
    </div>
</template>

<script>
export default {
    props:['view']
}
</script>
