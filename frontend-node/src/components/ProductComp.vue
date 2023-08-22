<template>
    <router-link :to="{name: 'product', params: {id: product.prodID}}" >
      
    </router-link>
</template>

<script>
    export default{
        props: ["product"],
    }
</script>

<style scoped>

    img{
        max-width: 300px;
        margin-top: 15px;
    }

</style>
