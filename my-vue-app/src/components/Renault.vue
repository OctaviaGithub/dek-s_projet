<template>
    <p>Liste des renaults disponibles</p>
        <div v-for="renault in renaults" :key="renault.id"> 
            <h3 class="card-description">{{ renault.name }}</h3>
            <img class="card-image" :src="renault.url_img" alt="Card image">
            <h3 class="card-description">{{ renault.description }}</h3>
            <center><hr ></center>
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

hr{
  width: 50%;
  color:black;
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


.card-title {
    flex-basis: 10%;
    margin: 0;
    padding: 0;
}


.card-description {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
  flex-basis: 30%;
  margin: 0;
}
</style>