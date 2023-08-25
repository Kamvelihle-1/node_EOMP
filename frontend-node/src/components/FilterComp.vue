<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-4 mx-1">
                <div class="row">
                    <label for="Categories" class="my-1">Filter by: Gender</label>
                </div>
                <div class="row">
                    <select v-model="fCategory" id="categories" name="Categories">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
                </div>
                
                
            </div>
            <div class="col-sm-5">
                <div class="row">
                    <label for="Type" class="my-1">Filter by: Shoe type</label>
                </div>
                <div class="row">
                    <select v-model="fType" id="categories" name="Type">
                    <option value="Sandals/Slip-ons">Sandals/Slip-ons</option>
                    <option value="Formal">Formal</option>
                    <option value="Sneakers">Sneakers</option>
                </select>
                </div>   
            </div>
            <div class="col-sm-2">
                <button class="fw-bold" @click="filter(products)">Filter</button>
            </div>
        </div>

        

    </div>
</template>
<script>
export default{
    data(){
        return{
            fCategory: null,
            fType: null 
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
        
    },
    methods:{
        filter(data){
            if(this.fCategory && this.fType){
               const dt = data.filter(item => item.Category.includes(this.fCategory) && item.prodType.includes(this.fType))
                this.$emit("apply-filter", dt)
            }else if(this.fCategory){
               const dt = data.filter(item => item.Category.includes(this.fCategory) )
                this.$emit("apply-filter", dt)
            }else if( this.fType){
               const dt = data.filter(item => item.prodType.includes(this.fType))
                this.$emit("apply-filter", dt)
            }
            
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }
}

</script>
<style scoped>
select,label{
    font-family: 'REM', sans-serif;
}
button{
    padding: 0.5rem;
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: rgb(200,160,4);
  padding: 1rem;
  color:#2c3e50
}
</style>