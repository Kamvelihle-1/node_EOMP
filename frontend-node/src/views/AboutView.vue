<template>
   <div class="about">
    <div class="bio p-2">
        <h2 class="display-5">About Us</h2>
        <p class="fs-4">SHOE GAME was founded in 2023 and our main focus is to empower fashion in completing your whole look and that is by making sure our customers purchase quality shoes that would last longer at an affordable price. </p>
        <p class="fs-4">We have partnered with major Brands such as H&M, POLO, Ewing Athletics, Adidas, Reebok, Crocs and Converse. We have been entrusted to maintain quality in our products and offer outstanding service in delivering our products to our customers. </p>
    </div>

    <h2 class="display-6" >Meet our Management Team</h2>
    <div class="founders">
        
        <div class="text-center">
            <img src="https://i.postimg.cc/zv1g1RvS/C12-Okuhle-Gwotiwe-1.jpg" class="img-thumbnail rounded-circle mt-5" >
            <p class="name mx-5 fs-5 mt-1">Co-Founder | Frontend <br>
            Okuhle Gxotiwe</p>
            
        </div>
     <div>
        <img src="https://i.postimg.cc/rm5t6rfb/C12-C2-Kamvelihle-Sikalana-2.jpg" class="img-thumbnail rounded-circle mt-5">
        <p class="name mx-5 fs-5 ">Co-Founder | Backend <br>
            Kamvelihle Sikalana</p>
     </div>
    </div>
    <div>

    </div>
   </div>
</template>
<script>

export default{
  
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');

    .bio,h2{
        font-family: 'REM', sans-serif;
       
    }
    .founders{
        font-family: 'REM', sans-serif;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
    }
    img{
        max-width: 150px;
    }
    h2, p{
        color: black;
    }
</style>