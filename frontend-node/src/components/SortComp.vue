<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-4">
                <label for="Names" class="my-1">Sort by: Name</label>
                <select v-model="sName" id="pName" name="Names">
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
            </div>
            <div class="col">
                <label>OR</label>
            </div>
            <div class="col-sm-4">
                <label for="Price" class="my-1">Sort by: Price</label>
                <select v-model="sPrice" id="amount" name="Price">
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
            </div>
            <div class="col">
                <button class="fw-bold" @click="sortData(products)">Sort</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            sName: null,
            sPrice: null 
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
        
    },
    methods:{ 
        sortData(data){
            if (this.sName) {
                if(this.sName=="Descending"){
                  const sData =  data.sort(function(a,b){
                   if(b.prodName > a.prodName){
                    return -1
                    }
                  })
                    this.$emit("apply-sort", sData)
                }else if(this.sName=="Ascending"){
                    const sData = data.sort()
                    this.$emit("apply-sort", sData)
                }
            } else if(this.sPrice){
                if(this.sPrice="Descending"){
                    const sData = data.sort((a,b)=>{return b.amount-a.amount})
                    this.$emit("apply-sort", sData)
                }else if(this.sPrice="Ascending"){
                    const sData = data.sort()
                    this.$emit("apply-sort", sData)
                } 
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