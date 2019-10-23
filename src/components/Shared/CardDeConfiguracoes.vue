<template>
    <div class="container-card">
        <q-card class="col-sm-10 col-xs-12 col-md-10 col-lg-5
        bg-grey-2 shadow-10 card-de-configuracao">

            <q-banner dense class="bg-grey-5 column align-center q-m">
                <p class="text-subtitle1 text-grey-9">
                    {{title}}
                </p>
                
                <div class="q-mt-sm">
                    <q-icon name="info" size="22px" style="margin-bottom:4px;" color="grey-8"/>
                    <span v-if="subtitle" class="text-subtitle2 text-grey-9 q-mt-sm">
                        {{subtitle}}
                    </span>
                </div>

                <template v-slot:avatar>
                <q-btn round glossy color="grey" class="q-mb-sm">
                    <q-icon :name="iconName" color="black" size="35px"/>
                </q-btn>
                </template>
            </q-banner>
                
            <slot>
            </slot>

            <!-- Botão para salvar as informações -->
            <div class="row">
                <q-space />
                <save-button 
                class="q-ma-md"
                :mensagem="mensagemSaveButton"
                @salvarAlteracoes="$emit('salvarAlteracoes')"
                />
            </div>
            <!--  -->
        
        </q-card>
    </div>
</template>

<script>
    export default{
        props:['mensagemSaveButton', 'title', 'iconName','subtitle'],
        components:{
            'save-button': require('./SaveButton').default,
        }
    }
</script>

<style lang="stylus">
    .container-card
        animation entry 1s
    
    .card-de-configuracao
        border-radius 10px
        box-shadow 0 0 8px 1px #eae5e5
</style>