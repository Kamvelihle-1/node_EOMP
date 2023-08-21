<template>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/brn30xcb/2.jpg" alt="logo" class="rounded-5">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/contact">Contact</a>
        </li>


        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/admin">Admin</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
</template>
<script>
export default{
    
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
nav{
  background-color: black;
  
}
img{
  max-width: 80px;
  max-height: 100px;
}
.navbar-nav{
  padding: 30px;
  font-family: 'REM', sans-serif;

 
}

.nav-item :hover{
  border-bottom: 2px solid ;
}
</style>