<template>
    
<div class="body" v-if="products">
          <div class="container justify-content-center">
            <SearchComp @apply-search="newdataDisplay"></SearchComp>
          </div>
          <div class="row table-container">
            <div class="col-12">
              <h1>Products</h1>
              <AddProduct/>
            </div>
            <div class="col prodTable">
              <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists"  @submit="deleteProduct">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody v-if="outputData.length>0">
                  <tr v-for="product in outputData" :key="product.prodID" class="bord">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>R {{ product.amount }}</td>
                    <td>{{ product.Category }}</td>
                    <td>{{ product.quantity }}</td>
                    <td><img class="tableImg" :src="product.prodUrl" alt="" /></td>
                    <td>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="setId(product.prodID)" data-bs-target="#UpdateProd" data-bs-whatever="@mdo">Update</button>
                      <button
                        type="button"
                        class="btn btton"
                        @click= deleteProduct(product.prodID)
                        id="delete-row"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr v-for="product in products" :key="product.prodID" class="bord">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>R {{ product.amount }}</td>
                    <td>{{ product.Category }}</td>
                    <td>{{ product.quantity }}</td>
                    <td><img class="tableImg" :src="product.prodUrl" alt="" /></td>
                    <td>
                      <button type="button" class="btn " data-bs-toggle="modal" @click="setId(product.prodID)" data-bs-target="#UpdateProd" data-bs-whatever="@mdo">Update</button>
                      <button
                        type="button"
                        class="btn btton"
                        @click= deleteProduct(product.prodID)
                        id="delete-row"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal fade" id="UpdateProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" @submit.prevent="updateproduct">
                <form>
                <div class="mb-3">
                  <label for="prodName" class="col-form-label">Product name:</label>
                  <input type="text"  v-model="data.prodName" class="form-control" id="prodName"  placeholder="Product Name" required>
                </div>
                <div class="mb-3">
                  <label for="category" class="col-form-label">Category:</label>
                  <input type="text"  v-model="data.Category" class="form-control" id="category"  placeholder="Category" required>
                </div>
                <div class="mb-3">
                  <label for="price" class="col-form-label">Price:</label>
                  <input type="text"  v-model="data.amount" class="form-control" id="price"  placeholder="Price" required>
                </div>
                <div class="mb-3">
                  <label for="type" class="col-form-label">Shoe type:</label>
                  <input type="text"  v-model="data.prodType" class="form-control" id="type"  placeholder="Shoe type" required>
                </div>
                <div class="mb-3">
                  <label for="brand" class="col-form-label">Brand:</label>
                  <input type="text"  v-model="data.Brand" class="form-control" id="brand"  placeholder="Shoe Brand" required>
                </div>
                <div class="mb-3">
                  <label for="quantity" class="col-form-label">Quantity:</label>
                  <input type="text"  v-model="data.quantity" class="form-control" id="quantity"  placeholder="Quantity" required>
                </div>
                <div class="mb-3">
                  <label for="desc" class="col-form-label">Description:</label>
                  <input type="text"  v-model="data.prodDesc" class="form-control" id="desc"  placeholder="Product Description" required>
                </div>
                <div class="mb-3">
                  <label for="image" class="col-form-label">Image:</label>
                  <input type="text"  v-model="data.prodUrl" class="form-control" id="image"  placeholder="Product Image url" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-success mt-3"  type="submit" @click="updateproduct" data-bs-dismiss="modal">Update product </button>
            </div>
          </div>
        </div>
      </div>
        </div>
</template>
<script>
import SearchComp from '@/components/SearchComp.vue';
import AddProduct from './AddProduct.vue';
const axios = require('axios');
  export default {
    // props: ["product"],
    components:{
      AddProduct,
      SearchComp
    },
    data(){
            return{
              outputData:[],
              data:{
                prodID:"",
                prodName:"",
                quantity:null,
                amount:null,
                Category:"",
                prodType:"",
                Brand:"",
                prodDesc:"",
                prodUrl:""
              }
            }
      },
      created(){
        for (product in this.products) {
            if (product.prodID == this.data.prodID){
                this.data.prodName = product.prodName,
                this.data.quantity= product.quantity,
                this.data.amount= product.amount,
                this.data.Category= product.Category,
                this.data.prodType= product.prodType;
                this.data.Brand= product.Brand;
                this.data.prodDesc= product.prodDesc,
                this.data.prodUrl= product.prodUrl;
            }
            
        }
      },
    computed: {
    products() {
      return this.$store.state.products
    }
    },
    mounted() {
    this.$store.dispatch("getProducts")
    },
    methods: {
      newdataDisplay(data){
           this.outputData=data;
         
        },
      setId(x){
          this.data.prodID =x
        },
        updateproduct(){
          this.$store.dispatch("updateProduct",this.data)
          console.log(this.data.prodID)
        },
        deleteProduct(x){
          this.$store.dispatch("deleteProduct",x)
        }  
      },  
  };
</script>
<style scoped>
button{
    margin: 0.5rem;
    padding: 0.5rem;
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: rgb(200,160,4);
  color:#2c3e50
}
.tableImg{
    width : 120px;
    height: auto;
}
.prodTable{
  overflow-x: scroll;
  padding: 2rem;
  max-width: 100%;
}
</style>



