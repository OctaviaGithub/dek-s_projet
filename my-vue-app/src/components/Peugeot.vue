<template>
    <p>Liste des peugeots disponibles</p>
        <div v-for="peugeot in peugeots" :key="peugeot.id"> 
            <h3 class="card-description">{{ peugeot.name }}</h3>
            <img class="card-image" :src="peugeot.url_img" alt="Card image">
            <h3 class="card-description">{{ peugeot.description }}</h3>
            <h3 class="card-description">{{ peugeot.price }}€</h3>
            <button>Add to cart</button>
            <center><hr></center>
        </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&family=Roboto+Condensed:ital,wght@0,100;0,400;1,400&display=swap');
</style>

<script>
export default {
    name: 'PeugeotVue',
    data() {
      return {
        peugeots:[]
      };
    },
    mounted() {
      fetch('http://localhost:3000/peugeot')
        .then(response => response.json())
        .then(data => {
          this.peugeots = data;
        })
    }
}
</script>

<style scoped>

hr{
  width: 50%;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}


.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 17%;
    margin: 10px;
    border: 5px white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}


.card-image {
    width: 25%;
    /* Ensure it takes the full width of its flex container */
    height: 25%;
    margin-bottom: 15px;
    /* Set a fixed height */
    object-fit: contain;
    /* Maintain aspect ratio and add whitespace if needed */
    border-radius: 10px;
    border: 5px white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    background-color: white;
}


.card-description {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
  flex-basis: 30%;
  margin: 0;
}
</style>