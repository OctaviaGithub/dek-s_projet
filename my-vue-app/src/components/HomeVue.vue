<template>
    <body>
      <div id="TitleSite">
        <p>Dek's Auto</p>
      </div>
      <div id="TitleCitation">
        <p>L'occasion dans vos mains</p>
      </div>
      <div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.caradisiac.com/images/5/3/3/8/185338/S0-audi-a1-d-occasion-faut-il-craquer-pour-un-premier-prix-649522.jpg" class="d-block w-60" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.ctfassets.net/uaddx06iwzdz/1sfLB4IrdwYgUAZBoT3phQ/5cde5764f2813e686f5fc54980099161/bmw-x4-l-02.jpg" class="d-block w-60" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://photos.auto-moto.com/32/2023/05/photo_article/16558/118331/1200-L-voiture-franaise-d-occasion-moins-de-15-000-focus-sur-la-peugeot-308.webp" class="d-block w-60" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  </div>
      </div>
      <!--
        <div class="slider-container">
        <div class="menu">
            <label for="slide-dot-1"></label>
            <label for="slide-dot-2"></label>
            <label for="slide-dot-3"></label>
        </div>
        
        <input class="slide-input" id="slide-dot-1" type="radio" name="slides" checked>
        <img class="slide-img" src="https://images.caradisiac.com/images/5/3/3/8/185338/S0-audi-a1-d-occasion-faut-il-craquer-pour-un-premier-prix-649522.jpg">

        <input class="slide-input" id="slide-dot-2" type="radio" name="slides">
        <img class="slide-img" src="https://images.ctfassets.net/uaddx06iwzdz/1sfLB4IrdwYgUAZBoT3phQ/5cde5764f2813e686f5fc54980099161/bmw-x4-l-02.jpg">
        
        <input class="slide-input" id="slide-dot-3" type="radio" name="slides">
        <img class="slide-img" src="https://photos.auto-moto.com/32/2023/05/photo_article/16558/118331/1200-L-voiture-franaise-d-occasion-moins-de-15-000-focus-sur-la-peugeot-308.webp">

        </div> -->
    </body>
  

</template>

<style scoped>
body{
  background-color: rgb(195, 211, 222);
}
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100;0,400;1,400&display=swap');

#TitleSite{
  font-size: 100px;
  padding-left:auto;
  padding-top: 100px;
  font-family: 'Roboto Condensed', sans-serif;
}
#TitleCitation{
  font-size: 50px;
  font-style:italic;
  padding-left:auto;
  padding-bottom: 100px;
  font-family: 'Roboto Condensed', sans-serif;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
}
.slider-container {
  max-width: 800px;
  position: relative;
  margin: auto;
  height: 350px;
  overflow: hidden;
}
.menu {
  position: absolute;
  left: 0;

  width: 100%;
  bottom: 0;
  text-align: center;
}
.menu label {
  cursor: pointer;
  display: inline-block;
  width: 200px;
  height: 10px;
  background: #000000;
  border-radius: 50px;
  margin: 0 0.2em 1em;
}
.menu label:hover,.menu label:focus {
  background: #1c87c9;
}
.slide-input{
  opacity: 0;
}
.slide-img {
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 10;
  transition: left 0s 0.75s;
}
[id^="slide"]:checked + .slide-img {
  left: 0;

  transition: left 0.65s ease-out;
}</style>

<script>
export default {
  name: 'HomeVue',
  props: {
    msg: String
  }
}
</script>