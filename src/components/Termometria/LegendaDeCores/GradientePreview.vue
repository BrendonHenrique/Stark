<template>
    <q-banner class="bg-grey-2">
        <template v-slot:avatar>
            <q-btn class="q-ma-xs float-left" round 
            :style="{  backgroundImage: gradiente }"/>
        </template>
        <div style="position:relative;top:15px;">
            <p class="text-grey-8" style="font-size:18px;font-weigth:400;font-weight: 600;">
                Resultado final para o gradiente de temperatura do sensor
            </p>
        </div>
    </q-banner>
</template>

<script>
export default {
    props: ['gradiente'],
}
</script>
