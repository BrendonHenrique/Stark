<template>
    <q-btn 
        class="save-button"
        label="salvar" @click="salvar()" 
        text-color="grey-9" icon-right="save" 
        :disable="isDisabled"
        type="submit" > 
        </q-btn>
</template>

<script>

import NotifyUsers from '../../services/NotifyUser'
import dialogPromise from '../../services/DialogPromise'

export default {
    props:['mensagem','isDisabled'],
    methods:{
        salvar(){
        
            dialogPromise(this.mensagem)
            .then( () => {   
                this.$emit('salvarAlteracoes')
                NotifyUsers.success('Alterações salvas com sucesso!')
            })
            .catch( () =>{
                NotifyUsers.error('As alterações não foram salvas')
            })
        }
    }
}
</script>
 