<template>
    <div v-if="product" class="product-details" :key="product.prodID" id="single">
      
      <div class="mb-3">
      
      </div>
      <div class="text-centre mt-5">

               <img :src="product.prodUrl">
                <h3>{{product.prodName}}</h3>
                <p>{{ product.Brand }}</p>
                <p>Price: R {{product.amount}}</p>
        <button class="btn btn-primary mt-2 mb-4">Add to cart</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    // props: ["id"],
    computed: {
      product() {
        return this.$store.state.product;
        
      },
      id() {
        return this.$route.params.id
      }
    },
    mounted() {
      console.log(this.id);
      this.$store.dispatch("getProduct", this.$route.params.id);
    },
    
  };
  
  </script>
  <style scoped>
    
    img{
          max-width: 300px;
          margin-top: 15px;
      }
      /* #single{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: center;
        flex-wrap: wrap;
      } */
</style>