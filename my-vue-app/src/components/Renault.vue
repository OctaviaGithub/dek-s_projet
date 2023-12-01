<template>
    <p>Liste des renaults disponibles</p>
        <div v-for="renault in renaults" :key="renault.id"> 
          <ul>
            <img class="card-image" :src="renault.url_img" alt="Card image">
            <li><p class="card-description">{{ renault.description }}</p></li>
            <li><p class="card-description">{{ renault.name }}</p></li>
          </ul>
        </div>
</template>

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
    /* Set a fixed height */
    object-fit: contain;
    /* Maintain aspect ratio and add whitespace if needed */
    background-color: white;
}


.card-title {
    flex-basis: 10%;
    margin: 0;
    padding: 0;
}


.card-description {
    flex-basis: 30%;
    margin: 0;
}</style>