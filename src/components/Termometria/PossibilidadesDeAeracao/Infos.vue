<template>
     <div style="left:2px;width: 6rem; position: relative;margin-top: 8px;">
        <q-input readonly bottom-slots  style="width: 7rem;"
            :label="possibilidades_de_aeracao.equilibrio" dense>
            <template v-slot:before>
                <q-img style="width:30px;color:grey" src="../../../assets/icons/balance.png" />
            </template>
            <template v-slot:hint>
                Equilibrio
            </template>
        </q-input>
        
        <q-input readonly bottom-slots style="width: 6.5rem;position:relative;left:7px;top:6px" 
            :label="possibilidades_de_aeracao.atual" dense>
            <template v-slot:before>
                <q-icon style="position:relative;right:4.3px;" name="schedule" />
            </template>
            <template v-slot:hint>
                Atual
            </template>
        </q-input>
        
    </div>
</template>

<script>
export default {
    props:['possibilidades_de_aeracao']
}
</script>