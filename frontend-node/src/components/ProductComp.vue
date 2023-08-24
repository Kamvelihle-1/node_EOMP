<template>
   <div class="container">
    <div class="row mb-4">
            <div class="col-sm-4"> <FilterComp @apply-filter="newdataDisplay"></FilterComp></div>
            <div class="col-sm-4"><SortComp @apply-sort="newdataDisplay"></SortComp></div>
            <div class="col-sm-2"><SearchComp @apply-search="newdataDisplay"></SearchComp></div>
        </div>
        
        <div class="flex-container" v-if="outputData.length>0" id="procard">
            <div class="card mb-5" v-for="product of outputData " :key="product.prodID">
                <div class="card-body">
                    <img :src="product.prodUrl">
                    <h3 class="mt-2">{{product.prodName}}</h3>
                    <p>Price: R {{product.amount}}</p>
                    <router-link class="btn btn-primary" :to="{ name:'product', params: {id: product.prodID}}">View More</router-link>
                </div>
            </div>

        </div>
        <div class="flex-container" v-else-if="products" id="procard">
            <div class="card mb-5" v-for="product of products" :key="product.prodID">
                <div class="card-body">
                    <img :src="product.prodUrl">
                    <h3 class="mt-2">{{product.prodName}}</h3>
                    <p>Price: R {{product.amount}}</p>
                    <router-link class="btn btn-primary" :to="{ name:'product', params: {id: product.prodID}}">View More</router-link>
                </div>
            </div>
        </div>
        <div v-else>
        <SpinnerComp/>
        </div>
   </div>
</template>

<script>
    import SpinnerComp from '@/components/SpinnerComp.vue';
    import FilterComp from '@/components/FilterComp.vue';
    import SortComp from '../components/SortComp.vue';
    import SearchComp from '@/components/SearchComp.vue';
    export default{
    components: { SpinnerComp, FilterComp, SortComp, SearchComp}, 
    data(){
        return{
            outputData:[],
            disDt:[]
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {    
        this.$store.dispatch("getProducts")
       
    },
   
    methods:{
        newdataDisplay(data){
           this.outputData=data;
         
        },
        

       
    },
   
       
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
     img{
        max-width: 300px;
        margin-top: 15px;
    }
    .flex-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: center;
      font-family: 'REM', sans-serif;
    
    }
    /* .card-body:hover img{
        scale: 1.1;
    } */
    /* .card-body:hover{
        box-shadow: 0px 0px 30px 20px rgb(229, 196, 30);
    } */
    @media screen and (max-width: 300px){
        img{
            max-width: 200px;
        }
        
    }

</style>
