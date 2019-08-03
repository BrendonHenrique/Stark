<template>
    <div class="row justify-center q-mb-xl" >
        <q-card
        style="height:16rem;"
        class="bg-grey-2 shadow-10  col-sm-7 col-xs-12 col-md-6 col-lg-3">
            <particles />
            <div class='row'>
                <div class="q-pt-sm q-pl-sm col-xs-5 col-sm-6 col-md-5 col-lg-5">
                    <avatar />
                    <infos-equilibrio  :possibilidades_de_aeracao="possibilidades_de_aeracao"/>
                </div>
                <div class="col-xs-7 col-sm-6 col-md-6 col-lg-7 q-pr-md">
                    <possibilidades>

                    </possibilidades>
                </div>
            </div>
        </q-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            possibilidades_de_aeracao:{
                atual:'0.000%',
                equilibrio:'9.564%'
            }
        }
    },
    components:{
        'particles': require('../../Shared/Particles').default,
        'avatar': require('./Avatar').default,
        'infos-equilibrio': require('./Infos').default,
        'possibilidades': require('./Possibilidades').default
    }
}
</script> 