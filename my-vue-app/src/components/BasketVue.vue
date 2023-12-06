<template>
  <div class="cart-container">
    <h1>Votre Panier</h1>
    <div v-for="cart in carts" :key="cart.id" class="cart-item">
      <p class="item-info">{{ cart.name }} - {{ cart.price }}€</p>
    </div>
    <button id="button1" @click="addItemToCart">Ajouter un article au panier</button>
  </div>
</template>

<script>
export default {
  name: 'MyBasket',
  data() {
    return {
      carts: []
    };
  },
  mounted() {
    this.fetchCartData();
  },
  methods: {
    fetchCartData() {
      fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then(data => {
          this.carts = data;
        });
    },
    addItemToCart() {
      // Vous pouvez ajouter ici la logique pour ajouter un nouvel article au panier
      // Actuellement, cette fonction n'est qu'un exemple et peut être personnalisée selon vos besoins.
      // Vous pouvez également utiliser des méthodes comme axios.post pour envoyer des données au serveur.
    }
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  color: #333;
  text-align: center;
}

.cart-item {
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.item-info {
  margin: 0;
  font-size: 18px;
  color: #333;
}

button {
  background-color: #00bfff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0080ff;
}
</style>