<template>
    <div class="registration-form">
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <label>
          Nom d'utilisateur:
          <input class="form-input" v-model="email" required />
        </label>
        <br />
        <label class="form-label">
          Mot de passe:
          <input class="form-input" type="password" v-model="password" required />
        </label>
        <br />
        <button class="form-button" type="submit">Se connecter</button>
      </form>
      <div v-if="error" style="color: red;">{{ error }}</div>
      <!--<router-link to="/inscriptionForm">Créer un compte</router-link>-->
    </div>
  </template>
  
  <script>



  export default {
    data() {
      return {
        username: '',
        password: '',
        error: null,
      };
    },
    methods: {
      /*async login() {
        // Vérifier les identifiants dans la base de données
        //const filePath = String.raw `.\dek-s_projet\my_express_app\myDB.js`;
        const filePath = '../../my_express_app/myDB.js';
        const db = require(filePath);      
        
        const query = 'SELECT * FROM utilisateur WHERE email = ? AND password = ?';
        const params = [this.email, this.password];
        try {
          const row = await new Promise((resolve, reject) => {
            db.get(query, params, (err, row) => {
              if (err) {
                reject(err);
              } else {
                resolve(row);
              }
            });
          });
          if (row) {
            // Utilisateur connecté avec succès
            this.$router.push('/HomeVue');
          } else {
            // Identifiants incorrects
            this.error = 'Identifiants incorrects.';
          }
        } catch (err) {
          console.error(err.message);
          this.error = 'Erreur lors de la connexion.';
        }
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