<template>



<body>
  <header id="nav-wrapper">
    <nav id="nav">
      <div class="nav left">
        <span class="gradient skew"><img src="../assets/logo.png" style="width: 60px; margin-left: 35px;"><a href="#home"></a></span>
        <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
      </div>
      <div class="nav right">
        <label for="input_search"> 
          <input class="nav-link" id="input_search" placeholder="Recherche..." v-model="texteSaisi">
          <a @click="afficher_donnees()"  id="onclick"><img src="../assets/search.png" id="image_search"></a>
        </label>
        <a href="#home" class="nav-link active"><span class="nav-link-span"><span class="u-nav">Home</span></span></a>
        <a href="#offres" class="nav-link"><span class="nav-link-span"><span class="u-nav">Offres</span></span></a>
        <a href="#contact" class="nav-link"><span class="nav-link-span"><span class="u-nav">Contact</span></span></a>
      </div>
    </nav>
  </header>

</body>


</template>


<script>
export default {
  name: 'MyHeader',
  methods: {
    search() {
      console.log("Je suis un bouton");
    },
    afficher_donnees(){
      console.log("This data is "+ this.texteSaisi);
    }
  },
  data(){
    return {
      texteSaisi:''
    } 
  }
};

var $ = require('jquery');

var util = {
  mobileMenu() {
    $("#nav").toggleClass("nav-visible");
  },
  windowResize() {
    if ($(window).width() > 800) {
      $("#nav").removeClass("nav-visible");
    }
  },
  scrollEvent() {
    var scrollPosition = $(document).scrollTop();
    
    $.each(util.scrollMenuIds, function(i) {
      var link = util.scrollMenuIds[i],
          container = $(link).attr("href"),
          containerOffset = $(container).offset().top,
          containerHeight = $(container).outerHeight(),
          containerBottom = containerOffset + containerHeight;

      if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
        $(link).addClass("active");
      } else {
        $(link).removeClass("active");
      }
    });
  }
};

$(document).ready(function() {
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
});


</script>

<style scoped>
/*-------------Reset-------------*/

button {
  background: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
}

button:focus,
input:focus {
  outline: 0;
}

html {
  scroll-behavior: smooth;
}

/*-------------Layout-------------*/
body {
  line-height: 1.5em;
  padding: 0;
  margin: 0;
}

#image_search{
  width: 30px;
  height: 30px;
  margin-top:15px;
  margin-right:50px;
}

#input_search{
  margin-right: 50px;
}

section {
  height: 100vh;
}




/*-------------Helpers-------------*/
.skew {
  transform: skew(-20deg);
}

.un-skew {
  transform: skew(20deg);
}

/*-------------Nav-------------*/
#nav-wrapper {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

#nav {
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: "Saira Semi Condensed", sans-serif;
  height: 4em;
  overflow: hidden;
}
#nav.nav-visible {
  height: 100%;
  overflow: auto;
}

.nav {
  display: flex;
  height: 4em;
  line-height: 4em;
  flex-grow: 1;
}

.nav-link,
.logo {
  padding: 0 1em;
}

span.gradient {
  background: #0b0b95;
  background: -webkit-linear-gradient(45deg, #0b0b95, #2b2bba);
  background: linear-gradient(45deg, #0b0b95, #2b2bba);
  padding: 0 1em;
  position: relative;
  right: 1em;
  margin-right: auto;
}
span.gradient:hover {
  animation-name: logo-hover;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.17, 0.57, 0.31, 0.85);
}

h1.logo {
  font-weight: 300;
  font-size: 1.75em;
  line-height: 0.75em;
  color: #fff;
}

h1.logo a, a:active, a:hover, a:visited {
  text-decoration: none;
  color: #fff;
}

.nav-link {
  text-transform: uppercase;
  text-align: center;
  border-top: 0.5px solid #ddd;
}

a:link, a:visited, a:active {
  text-decoration: none;
  color: #0b0b95;
}

a:hover {
  text-decoration: underline;
}

.right {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.btn-nav {
  color: #0b0b95;
  padding-left: 2em;
  padding-right: 2em;
}

@media (min-width: 800px) {
  #nav-wrapper {
    overflow: hidden;
  }

  #nav {
    overflow: hidden;
    flex-direction: row;
  }

  .nav-link {
    border-top: none;
  }

  .right {
    overflow: hidden;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    left: 1.5em;
    height: auto;
  }

  .btn-nav {
    display: none;
  }

  .nav a:link.active, a:visited.active, a:active.active {
    background: #0b0b95;
    background: -webkit-linear-gradient(45deg, #0b0b95, #2b2bba);
    background: linear-gradient(45deg, #0b0b95, #2b2bba);
    color: #fff;
  }

  .nav-link-span {
    transform: skew(20deg);
    display: inline-block;
  }

  .nav-link {
    transform: skew(-20deg);
    color: #777;
    text-decoration: none;
  }
  .nav-link:last-child {
    padding-right: 3em;
  }

  a:hover.nav-link:not(.active) {
    color: #444;
    background: #ddd;
    background: linear-gradient(45deg, #fff, #ddd);
  }
}
@keyframes logo-hover {
  20% {
    padding-right: 0em;
  }
  100% {
    padding-right: 5em;
  }
}

</style>