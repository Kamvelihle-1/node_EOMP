import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'

const cUrl = "https://node-eomp-6of6.onrender.com/"
const{cookies}=useCookies();
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    msg:null
  },
 
  mutations: {
    setProducts: (state, products) =>{
      state.products = products;
    },
     setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.users = user;
    },
    setMessage:(state,msg)=>{
      state.msg = msg;
    }
  },
  actions: {
    async getProducts(context) {
      try{
        const {data} = await axios.get(`${cUrl}products`)
        if (data.results) {
          context.commit("setProducts", data.results)
        }else{
          sweetAlert({
            title:"Error",
            text:data.msg,
            icon:"error",
            timer:2000
          })
        }  
      }catch(e){
        context.commit("setMessage", "An error occured")
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
    },
    async addProduct(context,payload){
      try {
        let {data} =await axios.post(`${cUrl}product`,payload)
        if(data.msg){
          context.dispatch("getProducts")
          swal({
            title:"Product adding",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMessage","An error occured")
      }
    },
    async updateProduct(context,payload){
      try {
        let {data} =await axios.patch(`${cUrl}product/${payload.prodID}`,payload)
        if(data.msg){
          context.dispatch("getProducts")
          swal({
            title:"Update",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
      } catch (e) {
        context.commit("setMessage","An error occured")
      }
    },
    async deleteProduct(context,id){
      try {
        let {data}= await axios.delete(`${cUrl}product/${id}`)
        if (data.msg) {
          context.dispatch("getProducts")
          swal({
            title:"Product removal",
            text: data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMessage","An error occured")
      }
    },  
    async getUsers(context) { 
      try{  
        const {data} = await  axios.get(`${cUrl}users`)
        if (data.results) { 
          context.commit("setUsers", data.results)
        }else{  
          sweetAlert({  
            title:"Error",  
            text:data.msg,  
            icon:"error", 
            timer:2000  
          })  
        }   

      }catch(e){  
        context.commit("setMessage", "An error occured")
        console.log(e); 
      } 
    },  
    async getUser(context, id ) {
      try{  
        const {data} = await  axios.get(`${cUrl}user/`+ id)
        context.commit("setUs er", data.results[0])
      }catch(e){  
        context.commit("setMessage", "An error occured")
        console.log(e); 
      } 
    }, 
    async addUser(context,payload){
      try {
        let {data} =await axios.post(`${cUrl}user/register`,payload)
        const {msg} = await data
        if(msg){
          context.dispatch("getUsers")
          swal({
            title:"User Registration",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMessage","An error occured")
      }
    },
    async updateUser(context,payload){
      try {
        let {data} =await axios.patch(`${cUrl}user/${payload.userID}`,payload)
        if(data.msg){
          context.dispatch("getUsers")
          swal({
            title:"Update",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
      } catch (e) {
        context.commit("setMessage","An error occured")
      }
    },
    async deleteUser(context,id){
      try {
        let {data}= await axios.delete(`${cUrl}user/${id}`)
        if (data.msg) {
          context.dispatch("getUsers")
          swal({
            title:"User removal",
            text: data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMessage","An error occured")
      }
    } 
  } 

 
})
