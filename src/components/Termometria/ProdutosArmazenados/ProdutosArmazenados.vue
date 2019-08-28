<template>
    <div class="row justify-center container-produto-armazenado" >
        <q-card style="box-shadow:0 0 8px 1px #eae5e5; font-family: 'Libre Caslon Text', serif;" 
        class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-5 col-lg-4 card-produto-armazenado">
            
            <!-- card header -->
            <avatar-header>
                <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                    <q-img v-for="item in produtos" :src="item.foto" :key="item.label" 
                        style="height: 160px; width: 180px;" 
                        v-show="produto.nome == item.label"  
                    />
                </transition-group>
                <q-img  
                    v-show="!produto.nome"
                    style="height: 280px; width: 160px;background-color:#DDDDDD;" 
                />
            </avatar-header>
                
            <!-- Select -->
            <q-card-section>
                <q-select outlined transition-show="jump-up" transition-hide="jump-down"
                v-model="produto.nome" :options="getOpcoesDeProdutos"  label="Selecionar produto"
                :rules="[val => !!val || 'Selecione um produto']">
                    <template v-slot:prepend>
                        <q-img   
                        style="height: 30px; width: 30px"
                        src="../../../assets/grain.svg" />
                    </template>
                </q-select>
            </q-card-section>
            <!--  -->
            
            <!-- Input variedade -->
            <q-card-section class="q-mt-lg">
                <q-input outlined label="Variedade" v-model="produto.variedade"
                :rules="[val => !!val || 'Insira a variedade do produto']">
                    <template v-slot:prepend>
                        <q-icon name="edit" />
                    </template>
                </q-input>
            </q-card-section>
            <!--  -->
            
            <!-- input safra -->
            <q-card-section class="q-mt-lg">
                <q-input outlined label="Safra" v-model="produto.safra"
                :rules="[val => !!val || 'Insira a safra do produto']">
                    <template v-slot:prepend>
                        <q-icon name="calendar_today" />
                    </template>
                </q-input>
            </q-card-section>
            <!--  -->            
            
            <!-- button salvar -->
            <q-card-actions class="row justify-end q-my-sm">
                <save-button        
                :mensagem="'Você gostaria de salvar as informações sobre o produto armazenado ?'"
                @salvarAlteracoes="update_produto_armazenado({id_silo: index_silo, produto})"
                />
            </q-card-actions>
            <!--  --> 
            
        </q-card>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    props:['index_silo'],
    data(){
        return{
            produtos:[
                {
                    label:'Arroz',
                    foto: '../../../assets/rice-2.jpg'
                },
                {
                    label:'Milho',
                    foto: '../../../assets/corn-2.jpg'
                },
                {
                    label:'Soja',
                    foto: '../../../assets/soja-3.jpg'
                },
                {
                    label:'Sorgo',
                    foto: '../../../assets/sorgo.jpg'
                },
                {
                    label:'Trigo',
                    foto: '../../../assets/trigo.jpg'
                },
                {
                    label:'Cevada',
                    foto: '../../../assets/cevada.jpg'
                },
                {
                    label:'Outros',
                    foto: '../../../assets/outros.jpg'
                },
            ],
            produto:{
                nome:null,
                variedade: null,
                safra: null
            }
        }
    },
    methods:{
        ...mapActions('silos',['update_produto_armazenado']),
        getProdutoArmazenado(index){
            const {produto_armazenado} = this.silo_by_id(index)
            return produto_armazenado
        },
        atualizaProduto(){
            Object.assign(this.produto, this.getProdutoArmazenado(this.index_silo))
        }
    },
    mounted(){
        this.atualizaProduto()
    },  
    components:{
        'avatar-header': require('./AvatarHeader.vue').default,
        'save-button': require('../../Shared/SaveButton').default
    },
    computed:{
        ...mapGetters('silos',['silo_by_id']),
        produtoNome(){
            return this.produto.nome
        },
        getOpcoesDeProdutos(){
            return  this.produtos.map( (val) =>  val.label)
        }
    },
    watch:{
        index_silo(index){
            this.atualizaProduto()
        },
    }
}
</script>

<style lang="stylus" >

    .container-produto-armazenado
        margin-bottom 4rem

        .q-field__native 
            font-size 19px
        
        .q-field__label 
            font-size 21px 
            
    .background-avatar 
        background url('../../../assets/wholegrains.jpg')  no-repeat center center 
        -webkit-background-size cover
        -moz-background-size cover
        -o-background-size cover
        background-size cover

    .card-produto-armazenado
        border-radius 10px

        
    .container-produto-armazenado
        animation entry 1s
        font-family 'Libre Caslon Text', serif

</style>
