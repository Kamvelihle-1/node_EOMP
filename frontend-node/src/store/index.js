import { createStore } from 'vuex'
import axios from 'axios'

const cUrl = "https://node-eomp-8xvj.onrender.com/"
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    msg:null
  },
 
  mutations: {
    setProducts: (state, products) =>{
      state.products = products;
    },
     setProduct: (state, product) => {
      state.product = product;
    },
    setMessage:(state,msg)=>{
      state.msg = msg;
    }
  },
  actions: {
    async getProducts(context) {
      try{
        const {data} = await axios.get(`${cUrl}products`)
        context.commit("setProducts", data.results)
      }catch(e){
        context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },

    async getProduct(context, id) {
    try{
      const {data} = await axios.get(`${cUrl}product/` + id)
      context.commit("setProduct", data.results[0])
    }catch(e){
      context.commit("setMessage", "An error occured")
    }
  }
  },
 
})
