<template>
    <div class="row justify-center" style="position: relative;top: 15px;">
        <q-btn flat dense class="bg-grey-3" :label="status_atual" 
        style="width:10rem;border-radius:10px;border:1px solid #9E9E9E"/>
    </div>
</template>

<script>
export default {
    props:['status_atual']
}
</script> 