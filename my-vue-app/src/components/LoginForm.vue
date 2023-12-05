<!-- Login.vue -->

<template>
  <div>
    <h2>Connexion</h2>
    <form @submit.prevent="login">
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
      <button type="submit">Se connecter</button>
    </form>
    <div v-if="error" style="color: red;">{{ error }}</div>
    <router-link to="/InscriptionForm">Créer un compte</router-link>
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
    async login() {
      // Vérifier les identifiants dans la base de données
      const filePath = String.raw `D:\School\epsi\L2\Examen_AtelierJavaScript\dek-s_projet\my_express_app\myDB.js`;

      const db = require(filePath);      
      
      const query = 'SELECT * FROM utilisateur WHERE username = ? AND password = ?';
      const params = [this.username, this.password];

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
    },
  },
};
</script>
