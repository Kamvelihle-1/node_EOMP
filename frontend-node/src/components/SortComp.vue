<template>
    <div>
        <label for="">Sort by:</label>
            <select name="" id="categories">
                <option value="">Name</option>
                <option value="">Price</option>
            </select>
    </div>
</template>
<script>
export default{
    async sortData(){
        await axios.get(`api link here with /users at the end `)
        .then((res)=>{
            this.output = res.output.results
            this.output.sort((a,b) => {
                if(a.prodName <b.prodName){
                     return -1;
                 }
                if(a.prodName > b.prodName){
                     return 1;
                 }
                 return 0;
             })
        })
        .catch((err)=>{
             console.log(err)
        })
    }
}

</script>