<template>
    <div>
      <img :src="message" id="img_test"><br>
      <button @click="fetchMessage">Get Message</button>
    </div>
</template>
  
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        message: ''
      }
    },
    methods: {
      async fetchMessage() {
        try {
          const response = await axios.get('http://localhost:3000/api/message');
          this.message = response.data.message;
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>
  