<template>
    <div class="row justify-center" style="position: relative;top: 15px;">
        <q-btn 
        class="bg-grey-3"
        glossy
        :label="status_atual" style="width:10rem;border-radius:6px;border:0.5px solid #9E9E9E" dense outline/>
    </div>
</template>

<script>
export default {
    props:['status_atual']
}
</script>

<style>

</style>
