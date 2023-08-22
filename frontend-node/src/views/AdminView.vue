<template>
    <div>
            <AdminComp/>
            <AddUser/>
            <AddProduct/>
            <UpdateProduct/>
            <UpdateUser/>

    </div>
    
</template>
<script>
  
   import AdminComp from '@/components/AdminComp.vue';
   import AddProduct from '@/components/AddProduct.vue';
   import AddUser from '@/components/AddUser.vue';
   import UpdateUser from '@/components/UpdateUser.vue';
   
    export default{
        components: {AdminComp, AddProduct, AddUser, UpdateUser}
    }

</script>