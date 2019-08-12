<template>
    <q-btn 
        class="save-button"
        label="salvar" @click="salvar()" 
        text-color="grey-9" icon-right="save" 
        :disable="isDisabled" />
</template>

<script>

import NotifyUsers from '../../services/NotifyUser'

export default {
    props:['mensagem','isDisabled'],
    methods:{
        salvar(){
            this.$q.dialog({
            title: 'Confirmação',
            message: this.mensagem,
            cancel: true,
            position: 'top',
            persistent: true,
            cancel:{
                label:'cancelar',
                color:'negative'
            },
            ok:{
                label:'confirmar',
                color:'positive'
            }
            })
            .onOk( () => {
                this.$emit('salvarAlteracoes')
                NotifyUsers.success('Alterações salvas com sucesso!')
            })
            .onCancel( () => {
                NotifyUsers.error('As alterações não foram salvas')
            })
        }
    }
}
</script>
 