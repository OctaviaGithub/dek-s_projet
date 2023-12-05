<template>
    <p>Voici votre nombre d'article : {{ baskets.nbr_article }}</p>
    <button id="button1">Ajouter un article au panier</button>
    <div class="spacer">
        
    </div>

</template>


<script>
    export default {
      name: 'MyBasket',
      data(){
        return {
            baskets: { nbr_article: 0 },
        };
      },
      /*mounted(){
        fetch('http://localhost:3000/peugeot')
        .then(response => response.json())
        .then(data => {
          this.baskets = data;
        })
      },
      methods:{
        submit_button(){
            console.log("Submit Test");
        }
      }*/
} 
    </script>

<style scoped>
.spacer{
    margin-top: 10px;
}

</style>