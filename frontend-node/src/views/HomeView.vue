<template>
    <div class="container">
    <!--hero-->
  <section class="hero m-0">
    <div class="hero-inner text-center text-black">
   
      <p class="text">The world is at your feet, get your SHOE GAME ON! <br>
        Shop quality shoes at the comfort on your home.</p>
      <a href="/products" class="btn">Shop Now!</a>
     
    </div>
  </section>

  <!----featured info-->
  <section id="featured">
  <div>
    <h2 class="text-black">Popular Categories</h2>
    <p class="text-black">We have a Featured Collection available for Men and Women.</p>
  </div>
</section>

<!--categories--->
   <section class="popular">
    <div class="mt-5 m-2 p-3" id="categories">
        <!--card1-->
        <div class="Card1">
            <div class="innerCard">
                 <div class="frontSide">
                        <p class="title text-black mb-5">Sandals</p>
                 </div>
                    <div class="backSide">
                        <p>Buy quality summer shoes available now!</p>
                        <button>Shop Now!</button>
                    </div>
            </div>
        </div>
        <!--card2-->
        
    </div>
   </section>
</div>
</template>

<script>
// @ is an alias to /src


export default {

}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');

*{
  overflow-x: hidden;
}
.popular{
  background-color:  #F7D069;
  
}
    .hero {
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(https://i.postimg.cc/Fzp6FGKh/best-men-sneakers-balmain-b-court-luxe-digital-780x520.jpg);
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
font-weight: 600;
font-size: 50px;
font-family: 'REM', sans-serif;


}

.hero-inner{
font-size: 25px;
}

#featured{
    font-family: 'REM', sans-serif;
}

.Card1 {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;


}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
  background-image: url(https://i.postimg.cc/P5JvBtJV/adicane-slide-men.jpg);
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
font-family: 'REM', sans-serif;
}

.innercard2{
    position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
  background-image: url(https://i.postimg.cc/P5JvBtJV/adicane-slide-men.jpg);
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
font-family: 'REM', sans-serif;
}
.card2 :hover .innercard2{
    transform: rotateY(180deg);
}
.Card1:hover .innerCard {
  transform: rotateY(180deg);
}


.frontSide,
.backSide {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /*border: 1px solid rgba(255, 255, 255, 0.8);*/
  border-radius: 1rem;
  color: white;
  /*box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);*/
  font-weight: 700;
}

.frontSide,
.frontSide::before {
  /*background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);*/

}

.backSide,
.backSide::before {
  /*background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);*/
  background-color: black;
}

.backSide {
  transform: rotateY(180deg);
}

.frontSide::before,
.backSide::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 1em;
  filter: blur(20px);
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}
</style>