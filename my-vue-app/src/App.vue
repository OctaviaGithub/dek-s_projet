<template>
  <main>
    <Header msg="Voici le component MyHeader"/>
      <section id="home">  
        <HomeVue msg="Voilà le code pour la section Home"/>
        
      </section>

      <section id="offres">
        <div id="app">
          <nav>
            <ul>
              <router-link class="button-router" id="router1" to="/">Back Home</router-link>
              <router-link class="button-router" to="/peugeot">Show Peugeot</router-link>
              <router-link class="button-router" id="router2" to="/renault">Show Renault</router-link>
              <router-link class="button-router" id="router2" to="/cart">Show Cart</router-link>
            </ul>
          </nav>
          <router-view />
        </div>
      </section>
  
      <section id="contact">

        <MyFooter />

      </section>
      </main>
  
  </template>
  
  <script>
  import Header from './components/Header.vue'
  import HomeVue from './components/HomeVue.vue';
  import MyFooter from './components/MyFooter.vue';

  
  
  export default {
    name: 'App',
    components: {
      Header , HomeVue , MyFooter
    }
  };
</script>

<style>

#router1{
  padding-right:100px;
}
#router2{
  padding-left:100px;
}
.button-router{
  text-decoration:none;
  align-items: center;
  color: black;
}
main{
  background : linear-gradient(270deg, #0B0B95 0%, rgba(235, 235, 255, 0.98) 45.42%, rgba(255, 255, 255, 0.98) 50.9%, rgba(229, 229, 255, 0.98) 55.83%, rgba(11, 11, 149, 0.98) 100%);








}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
  line-height: 4;
}
nav ul {
  list-style-type: none;
}



</style>
