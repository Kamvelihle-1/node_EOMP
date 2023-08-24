<template>
    <div>
        <div class="row">
            <div class="col-sm-5">
                <label for="Names" class="my-1">Sort by: Name</label>
                <select v-model="fCategory" id="pName" name="Names">
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
            </div>
            <div class="col-sm-4">
                <label for="Price" class="my-1">Sort by: Price</label>
                <select v-model="fType" id="amount" name="Price">
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
            </div>
            <div class="col-sm-2">
                <button @click="sortData(products)">Sort</button>
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
                  const sData =  data.prodName.sort((a,b)=>b-a)
                    this.$emit("apply-sort", sData)
                }else if(this.sName=="Ascending"){
                    const sData = data.prodName.sort()
                    this.$emit("apply-sort", sData)
                }
            } else if(this.sPrice){
                if(this.sPrice="Descending"){
                    const sData = data.amount.sort((a,b)=>b-a)
                    this.$emit("apply-sort", sData)
                }else if(this.sPrice="Ascending"){
                    const sData = data.amount.sort()
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