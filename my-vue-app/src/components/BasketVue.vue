<template>
  <div v-for="cart in carts" :key="cart.id">
    <p>Voici vos articles que vous avez ajouté : {{ cart.name }} avec un prix de {{ cart.price }}</p>
  </div>
    <button id="button1">Ajouter un article au panier</button>
    <div class="spacer">
        
    </div>

</template>


<script>

    export default {
      name: 'MyBasket',
      data() {
      return {
        carts:[]
      };
    },
    mounted() {
      fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then(data => {
          this.carts = data;
        })
    }
  }
 
    </script>

<style scoped>
.spacer{
    margin-top: 10px;
}

</style>