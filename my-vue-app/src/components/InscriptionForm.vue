<!-- Inscription.vue -->

<template>
    <div>
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <label>
          Nom d'utilisateur:
          <input v-model="username" required />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type="password" v-model="password" required />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async register() {
        // Insérertion des nouveaux identifiants dans la base de données
     
        const filePath = String.raw `D:\School\epsi\L2\Examen_AtelierJavaScript\dek-s_projet\my_express_app\myDB.js`;

        const db = require(filePath);   
  
        const query = 'INSERT INTO utilisateur (username, password) VALUES (?, ?)';
        const params = [this.username, this.password];
  
        db.run(query, params, (err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log('Vous etes inscrit avec succès.');
            this.$router.push('/HomeVue');
          }
        });
      },
    },
  };
  </script>
  