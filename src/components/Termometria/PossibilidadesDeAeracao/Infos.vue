<template>
     <div style="left:0.5rem;position: relative;margin-top: 8px;z-index:3;">
        <q-input 
            style="width: 8rem;"
            v-model="info.equilibrio" 
            bottom-slots 
            suffix="%"
            readonly 
            dense>
            <template v-slot:before>
                <q-img style="width:30px;color:grey" src="../../../assets/icons/balance.png" />
            </template>
            <template v-slot:hint>
                Equilibrio
            </template>
        </q-input>
     
        <q-input 
            style="width: 7.6rem;position:relative;left:7px;top:6px;z-index:3;" 
            v-model="info.atual" 
            bottom-slots
            suffix="%"
            maxlength="7"
            dense
            >
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
    props:['info']
}
</script>