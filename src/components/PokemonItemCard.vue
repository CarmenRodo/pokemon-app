<template>
  <div className="card">
    <!-- Pokemon image -->
    <img :src="pokemonImage" :alt="pokemonName" class="card-img-top">
    <div className="card-body">
      <!-- Pokemon name -->
      <h5 className="card-title">{{ pokemonName }}</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['pokemonName'],
  data() {
    return {
      pokemonImage: '',    // Holds the URL of the Pokemon image
    };
  },
  mounted() {
    this.getPokemon();    // Fetches the Pokemon image on component mount
  },
  methods: {
    async getPokemon() {
      try {
        // Fetches the Pokemon data from the API
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`);
        // Extracts the image URL from the response data
        this.pokemonImage = response.data.sprites.other['official-artwork'].front_default;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.card {
  width: 18rem;
}
</style>
