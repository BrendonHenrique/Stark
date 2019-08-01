<template>
    <q-banner class="bg-grey-2">
        <template v-slot:avatar>
            <q-btn class="q-ma-lg float-left" round 
            :style="{  backgroundImage: gradiente_de_temperatura }"/>
        </template>
        <p class="text-grey-8">
            Resultado final para o gradiente de temperatura.
        </p>
    </q-banner>
</template>

<script>
    import {mapGetters} from 'vuex'
    
    export default {
        props: ['cores'],
        computed:{
            ...mapGetters('legenda_de_cores',['gradiente_de_temperatura'])
        }
    }

</script>
