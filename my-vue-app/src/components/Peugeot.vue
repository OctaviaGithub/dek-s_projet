<template>
    <p>Liste des peugeots disponibles</p>
        <div v-for="peugeot in peugeots" :key="peugeot.id"> 
          <ul>
            <img class="card-image" :src="peugeot.url_img" alt="Card image">
            <li><p class="card-description">{{ peugeot.description }}</p></li>
            <li><p class="card-description">{{ peugeot.name }}</p></li>
          </ul>
        </div>
</template>

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
main{
  background-color: rgb(195, 211, 222);
}
</style>