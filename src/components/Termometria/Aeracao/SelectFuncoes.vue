<template>
    <div>
        <p class="text-center text-subtitle1 q-pa-sm text-grey-10">
            Selecione abaixo uma função para aerar o silo
        </p>
        <div class="row justify-center q-pa-md">
            <q-btn-dropdown glossy dense outline
            color="primary" label="Selecionar">
                <q-list>
                    <q-item v-for="item in listaDeLabels"
                    :key="item"
                    clickable v-close-popup 
                    @click="$emit('selecionarOpcao',item)">
                        <q-item-section>
                            <q-item-label>{{item}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    props:['listaDeLabels']
}
</script>
