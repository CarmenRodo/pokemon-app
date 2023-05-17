<template>
  <div class="container">
    <!-- Pokemon name -->
    <h2>{{ pokemon.name }}</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <!-- Pokemon image -->
          <img :src="pokemon.image" :alt="pokemon.name" class="card-img-top" />
          <div class="card-body">
            <!-- Pokemon name -->
            <h5 class="card-title">{{ pokemon.name }}</h5>
            <!-- Pokemon ID -->
            <p><strong>ID:</strong> {{ pokemon.id }}</p>
          </div>
        </div>
      </div>
      <!-- Add more details about the Pokemon as needed -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemon: null,
    };
  },
  mounted() {
    this.fetchPokemonDetails();
  },
  methods: {
    async fetchPokemonDetails() {
      try {
        // Fetch Pokemon details from the API
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`);
        // Set the retrieved Pokemon data to the component's data
        this.pokemon = {
          name: response.data.name,
          image: response.data.sprites.front_default,
          id: response.data.id,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
/* Add any custom styles here */
.container {
  margin-top: 20px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
