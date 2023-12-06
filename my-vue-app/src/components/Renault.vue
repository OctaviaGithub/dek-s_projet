<template>
    <h1 class="title">Bienvenue dans notre sélection Renault</h1>
    <div class="cards-container">
      <div v-for="renault in renaults" :key="renault.id" class="card"> 
        <img class="card-image" :src="renault.url_img" alt="Image de la voiture {{ renault.name }}">
        <div class="card-details">
          <h2 class="card-title">{{ renault.name }}</h2>
            <p class="card-description">{{ renault.description }}</p>
            <p class="card-price">{{ renault.price }}€</p>
            <button>Add to cart</button>
        </div>
      </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&family=Roboto+Condensed:ital,wght@0,100;0,400;1,400&display=swap');
</style>

<script>
export default {
    name: 'RenaultVue',
    data() {
      return {
        renaults:[]
      };
    },
    mounted() {
      fetch('http://localhost:3000/renaults')
        .then(response => response.json())
        .then(data => {
          this.renaults = data;
        })
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto+Condensed:wght@400&display=swap');
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
}



.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  padding: 15px;
  border: 2px solid #00bfff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  max-width: 300px;
  width: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
}

.card-details {
  padding: 15px;
}

.card-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.card-description {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 10px 0;
  color: #555;
}

.card-price {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #00bfff;
}

button {
  background-color: #00bfff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0080ff;
}
</style>