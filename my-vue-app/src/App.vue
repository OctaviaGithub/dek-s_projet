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
              <router-link class="button-router" id="routerlink1" to="/">Back Home</router-link>
              <router-link class="button-router" id="routerlink2" to="/peugeot">Show Peugeot</router-link>
              <router-link class="button-router" id="routerlink3" to="/renault">Show Renault</router-link>
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



main{
  background-color: rgb(195, 211, 222);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  list-style-type: none;
}
#routerlink1{
  text-decoration: none;
  padding:100px;
}
#routerlink2{
  text-decoration: none;
  padding:100px;
}
#routerlink3{
  text-decoration: none;
  padding:100px;
}



</style>
