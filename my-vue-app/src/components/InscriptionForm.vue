<template>
    <div class="registration-form">
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <label class="form-label">
          Nom d'utilisateur:
          <input class="form-input" v-model="username" required />
        </label>
        <br />
        <label class="form-label">
          Mot de passe:
          <input class="form-input" type="password" v-model="password" required />
        </label>
        <br />
        <button class="form-button" type="submit">S'inscrire</button>
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
      /*async register() {
        // Insérertion des nouveaux identifiants dans la base de données
     
        const filePath = String.raw `.\dek-s_projet\my_express_app\myDB.js`;
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
      },*/
    },
  };
  </script>

<style scoped>
.registration-form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #3498db;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

h2 {
  text-align: center;
  color: #3498db;
}

.form-label {
  display: block;
  margin: 10px 0;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #2980b9;
}
</style>