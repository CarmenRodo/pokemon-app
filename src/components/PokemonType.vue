<template>
  <div class="container">
    <h2>Pokemon Types</h2>
    <!-- List of Pokemon types -->
    <ul class="list-group">
      <li v-for="type in types" :key="type.name" class="list-group-item">
        <!-- Router link to navigate to the Pokemon list page for a specific type -->
        <router-link :to="{ name: 'PokemonList', params: { type: type.name } }" class="text-decoration-none">
          {{ type.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      types: []    // Holds the list of Pokemon types
    };
  },
  mounted() {
    this.fetchPokemonTypes();    // Fetches the list of Pokemon types on component mount
  },
  methods: {
    async fetchPokemonTypes() {
      try {
        // Fetches the list of Pokemon types from the API
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        this.types = response.data.results;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
/* Add custom Bootstrap styles here */
.container {
  margin-top: 20px;
}

.list-group-item {
  cursor: pointer;
}
</style>
