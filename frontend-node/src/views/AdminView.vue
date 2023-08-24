<template>
    <div>
            <h2>Admin Page</h2>
            <UserComp/>
            <ProdAdmin/>

    </div>
    
</template>
<script>
import UserComp from '../components/UserComp.vue'
import ProdAdmin from '@/components/ProdAdmin.vue';

   
   
    export default{
        components: {UserComp, ProdAdmin}
    }

</script>