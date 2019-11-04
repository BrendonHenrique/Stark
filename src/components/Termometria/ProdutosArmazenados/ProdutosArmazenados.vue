<template>
    <div class="row justify-center container-produto-armazenado" >
        <q-card class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-5 col-lg-4 card-produto-armazenado">
            
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
            <!--  -->

            <q-card-section >
                
                <q-form  @submit="atualizarProduto" class='q-gutter-lg'>
                    <q-select outlined transition-show="jump-up" transition-hide="jump-down"
                    v-model="produto.nome" :options="getOpcoesDeProdutos"  label="Selecionar produto"
                    :rules="[val => !!val || 'Selecione um produto']">
                        <template v-slot:prepend>
                            <q-img   
                            style="width: 30px"
                            src="../../../assets/grain.svg" />
                        </template>
                    </q-select>
                
                    <q-input outlined label="Variedade" v-model="produto.variedade">
                        <template v-slot:prepend>
                            <q-icon name="edit" />
                        </template>
                    </q-input>

                    <q-input  outlined @focus="() => $refs.qDateProxy.show()" label="Safra" v-model="produto.safra">
                        <template v-slot:prepend>
                            <q-icon name="edit" />
                        </template>
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date  
                                today-btn
                                class="safra-date-select" 
                                default-view="Years"
                                :locale="myLocale"
                                landscape v-model="produto.safra"
                                @input="formatarSafra" />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                
                    <q-btn
                        label="salvar" 
                        text-color="grey-9"
                        icon-right="save" 
                        class="q-my-md float-right"        
                        type="submit"
                        :mensagem="'Você gostaria de salvar as informações sobre o produto armazenado ?'"
                    />
                </q-form>

            </q-card-section>
            
        </q-card>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import dialogPromise from '../../../services/DialogPromise';
import NotifyUsers from '../../../services/NotifyUser';

export default {
    props:['index_silo'],
    data(){
        return{
            myLocale: {
                days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
                daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
                months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
                monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Otu_Nov_Dez'.split('_'),
                firstDayOfWeek: 1
            },
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
        }
    },
    methods:{
        ...mapActions('silos',['update_produto_armazenado']),
        atualizarProduto(){
            dialogPromise('Atualizar o produto armazenado ? ')
            .then( () => {   
                NotifyUsers.success('Alterações salvas com sucesso!')
                this.update_produto_armazenado({index_silo:this.index_silo, produto: this.produto});
            })
            .catch( () =>{
                NotifyUsers.error('As alterações não foram salvas')
            });
        },
        formatarSafra(){
            this.$refs.qDateProxy.hide();
            var dia  = this.produto.safra.split("/")[0];
            var mes  = this.produto.safra.split("/")[1];
            var ano  = this.produto.safra.split("/")[2];
            this.produto.safra =  ano + '/' + ("0"+mes).slice(-2) + '/' + ("0"+dia).slice(1);
        }
    },
    components:{
        'avatar-header': require('./stateless/AvatarHeader.vue').default,
        'save-button': require('../../Shared/SaveButton').default
    },
    computed:{
        ...mapGetters('silos',['get_produto_armazenado']),
        getOpcoesDeProdutos(){
            return  this.produtos.map( (val) =>  val.label);
        },
        produto(){
            return this.get_produto_armazenado(this.index_silo)
        }
    },
}
</script>

<style lang="stylus" >

    .safra-date-select
        .q-date__header
            box-shadow: 6px 6px 15px 0px #3a3e42
            background-color: $secondary
    

    .container-produto-armazenado
        margin-bottom 10rem
        width 100%

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
        box-shadow 0 0 8px 1px #eae5e5
        font-family 'Libre Caslon Text', serif
        border-radius 10px
        
    .container-produto-armazenado
        animation entry 1s
        font-family 'Libre Caslon Text', serif
            

</style>
