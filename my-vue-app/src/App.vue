<template>
  <main>
    <Header msg="Voici le component MyHeader"/>
      <section id="home">  
        <HomeVue msg="Voilà le code pour la section Home"/>
        
      </section>

      <section id="offres">
        <div class="navbar">
          <select v-model="selectedRoute" @change="navigate">
            <option value="/">Accueil</option>
            <option value="/peugeot">Peugeot</option>
            <option value="/renault">Renault</option>
            <option value="/cart">Panier</option>
          </select>
        </div>
        <router-view />
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
    }, data() {
    return {
      selectedRoute: '/'
    };
    }, 
    methods: {
    navigate() {
      this.$router.push(this.selectedRoute);
    }
  }
  }

</script>

<style scoped>

.navbar {
  margin-bottom: 20px;
  text-align: center;
}

select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #3498db;
  border-radius: 5px;
  margin: 10px auto;
  display: block;
  background-color: #ecf0f1;
  color: #3498db;
}

select:hover {
  border-color: #2980b9;
}

select:hover {
  outline: none;
  border-color: #2980b9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

</style>

<style>

select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


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



</style>
