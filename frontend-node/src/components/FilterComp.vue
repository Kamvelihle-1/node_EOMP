<template>
    <div>
        <label for="">Filter by:</label>
            <select name="" id="categories">
                <option value="">Gender</option>
                <option value="">Shoe Type</option>
            </select>
    </div>
</template>
<script>
export default{
    data(){
        return{
            fCategory: null,
            fType: null,
            output: []
        }
    },
    methods:{
    //async since it's getting data from the hosted api
    async filterData(){
        await axios.get(`https://node-eomp-8xvj.onrender.com/users `)
        .then((res)=>{
            this.output = res.output.results
            this.output = this.output.filter(item => item.Category.includes(this.fCategory) && item.prodType.includes(this.fType))
        })
        .catch((err)=>{
             console.log(err)
        })
    }
    }
}

</script>