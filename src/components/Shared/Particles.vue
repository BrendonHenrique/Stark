<template>
    <vue-particles 
        style="z-index:2;position:absolute;width: 100%;height: 100%;bottom:0;right: 0"
        color="#7a5858"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="2"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="7"
        :hoverEffect="false"
        :clickEffect="false"
    ></vue-particles>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
export default{
    return(){}
}
</script>
 
