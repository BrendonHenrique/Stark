<template>
    <div class="row justify-center q-mb-xl possibilidades-de-aeracao" >
        <q-card
        style="height:23rem; box-shadow:0 0 8px 1px #eae5e5;"
        class="bg-grey-3 col-sm-10 col-xs-12 col-md-8 col-lg-6">
            
            <particles />
            
            <div class='row'>
                
                <div class="q-pt-md col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <avatar class="q-mb-md" />
                    <infos-equilibrio  :info="aeracao.infos.silo"/>
                </div>

                <div 
                style="height:18rem;z-index:3!important"
                class="col-xs-8 col-sm-8 col-md-8 col-lg-8 q-pr-md">
                     
                    <FlipCard :flipped="flipped" class="flip-card">

                        <template slot="front"> 
                            <div class="row justify-center">
                                <span class="text-grey-7 text-h6 q-py-sm">
                                    Possibilidades
                                </span>
                                <possibilidades :possibilidades="aeracao.possibilidades"/>
                            </div>
                        </template>

                        <template slot="back"> 
                            <div class="row justify-center">
                                <div>
                                    <span class="text-grey-7 text-h6 q-py-sm">
                                        Funcoes
                                    </span>
                                </div>
                                <funcoes :aeracao="aeracao" :isFlipped="flipped" />
                            </div>
                        </template>

                    </FlipCard>

                </div>
            </div>

            <view-controler :view="card_view" @changeView="changeView"/> 
        </q-card>
    </div>
</template>

<script>

export default {
    data(){
        return{
            card_view:{
                Possibilidades_card: true,
                Funcoes_card: false,
            },
            aeracao:{
                infos:{
                    silo:{
                        atual: 0,
                        equilibrio: 9.564,
                   },
                    ambiente:[
                        {
                            valor: 10,
                            label: 'Umidade ambiente min'
                        },
                        {
                            valor: 10,
                            label: 'Umidade ambiente max'
                        },
                        {
                            valor: 10,
                            label: 'Temperatura ambiente max'
                        }
                    ]
                },
                    possibilidades:[{
                        label: 'Por Conservação',
                        isPossible: true
                    },
                    {
                        label: 'Por Secagem',
                        isPossible: false
                    },
                    {
                        label: 'Por Semi-auto',
                        isPossible: false
                    },
                    {
                        label: 'Por Emergência',
                        isPossible: true
                    }],
                    funcoes:[{
                        label: 'Manual',
                        isActivated: false
                    },
                    {
                        label: 'Auto',
                        isActivated: false
                    },
                    {
                        label: 'Semi Auto',
                        isActivated: false
                    },
                    {
                        label: 'Forçado',
                        isActivated: false
                    },
                    {
                        label: 'Expurgo',
                        isActivated: false
                    }] 
            },  
            flipped: true
        }
    },
    methods:{
        changeView(){
            this.card_view.Possibilidades_card = !this.card_view.Possibilidades_card 
            this.card_view.Funcoes_card = !this.card_view.Funcoes_card 
            this.flipped = !this.flipped
        }
    },
    components:{
        'particles': require('../../Shared/Particles').default,
        'avatar': require('./Avatar').default,
        'infos-equilibrio': require('./Infos').default,
        'card-aeracao': require('./CardAeracao').default,
        'view-controler': require('./ViewControler').default,
        'possibilidades': require('./Possibilidades').default,
        'FlipCard': require('../../Shared/FlipCard').default,
        'funcoes': require('./Funcoes').default
    },
}
</script> 

<style lang="stylus">
    .possibilidades-de-aeracao
        animation entry 1s
        font-family 'Orbitron', sans-serif
    
    .activated
        animation entry 1s  
     
    @keyframes entry
        from
            opacity 0
            transform scale(0.95)

        to
            opacity 1
            transform scale(1)  

</style>
