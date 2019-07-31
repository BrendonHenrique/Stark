<template>
    <div class="row justify-center container-produto-armazenado">
        <q-card class="bg-grey-2 shadow-10 col-sm-5 col-xs-12 col-md-5 col-lg-4 card-produto-armazenado">
            
            <!-- card header -->
            <avatar-header>
                <transition-group enter-active-class="animated fadeIn" 
                    leave-active-class="animated fadeOut">
                <q-img v-for="item in produtos" :src="item.foto" :key="item.label" 
                    style="height: 160px; width: 180px;" 
                    v-show="produto_armazenado.nome == item.label"  
                />
                </transition-group>
                <q-img  
                    v-show="!produto_armazenado.nome"
                    style="height: 280px; width: 160px;background-color:#DDDDDD;" 
                />
            </avatar-header>
                
            <!-- Select -->
            <q-card-section>
                <q-select outlined transition-show="jump-up" transition-hide="jump-down"
                 v-model="produto_armazenado.nome" :options="getProdutos" label="Selecionar produto">
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
                <q-input outlined label="Variedade" v-model="produto_armazenado.variedade">
                    <template v-slot:prepend>
                        <q-icon name="edit" />
                    </template>
                </q-input>
            </q-card-section>
            <!--  -->
            
            <!-- input safra -->
            <q-card-section class="q-mt-lg">
                <q-input outlined label="Safra" v-model="produto_armazenado.safra">
                    <template v-slot:prepend>
                        <q-icon name="calendar_today" />
                    </template>
                </q-input>
            </q-card-section>
            <!--  -->            
            
            <!-- button salvar -->
            <q-card-actions class="row justify-end q-my-sm">
                <q-btn label="salvar" /> 
            </q-card-actions>
            <!--  -->
            
        </q-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            produtos:[
                {
                    label:'Arroz',
                    foto: '../../assets/rice-2.jpg'
                },
                {
                    label:'Milho',
                    foto: '../../assets/corn-2.jpg'
                },
                {
                    label:'Soja',
                    foto: '../../assets/soja-3.jpg'
                },
                {
                    label:'Sorgo',
                    foto: '../../assets/sorgo.jpg'
                },
                {
                    label:'Trigo',
                    foto: '../../assets/trigo.jpg'
                },
                {
                    label:'Cevada',
                    foto: '../../assets/cevada.jpg'
                },
                {
                    label:'Outros',
                    foto: '../../assets/outros.jpg'
                },
            ],
            produto_armazenado:{
                nome:null,
                variedade: null,
                safra: null
            }
        }
    },
    components:{
        'avatar-header': require('../Shared/AvatarHeader.vue').default
    },
    computed:{
        getProdutos(){
            let labels = this.produtos.map( (val) => {
                return val.label 
            })
            return labels
        }
    }
}
</script>

<style lang="stylus" >

    .background-avatar 
        background url('../../assets/wholegrains.jpg') no-repeat center 
    .card-produto-armazenado
        border-radius 10px
        
    .container-produto-armazenado
        animation entry 1s

</style>
