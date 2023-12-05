<template>
  <main>
    <Header msg="Voici le component MyHeader"/>
      <section id="home">  
        <HomeVue msg="Voilà le code pour la section Home"/>
        
      </section>

      <section id="offres">
        <Direct msg="test avec mon back"/>
        <CallAsyn msg="Deuxième test avec mon back" />
        <div id="app">
          <nav>
            <ul>
              <li><router-link class="button-router" to="/peugeot">Show Peugeot</router-link></li>
              <li><router-link class="button-routeur" to="/renault">Show Renault</router-link></li>
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
  import Direct from './components/ImportDirect.vue';
  import CallAsyn from './components/CallAsyn.vue';
  import MyFooter from './components/MyFooter.vue';

  
  
  
  export default {
    name: 'App',
    components: {
      Header , HomeVue , Direct , CallAsyn, MyFooter
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
  padding: 0;
}




</style>
