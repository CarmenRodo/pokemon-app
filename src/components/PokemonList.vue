<template>
  <div class="container">
    <h2>Pokemon List - {{ type }}</h2>
    <!-- Pokemon list -->
    <div class="row">
      <div class="col-md-4" v-for="pokemon in pokemonList" :key="pokemon.name">
        <router-link :to="`/pokemon/${pokemon.id}`" class="pokemon-item">
          <div class="card">
            <img :src="pokemon.image" :alt="pokemon.name" class="card-img-top pokemon-img" />
            <div class="card-body">
              <h5 class="card-title">{{ pokemon.name }}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['type'],
  data() {
    return {
      pokemonList: [],    // Holds the list of Pokemon for the specified type
    };
  },
  mounted() {
    this.fetchPokemonList();    // Fetches the Pokemon list for the specified type on component mount
  },
  watch: {
    type: {
      immediate: true,
      handler() {
        this.fetchPokemonList();    // Fetches the Pokemon list whenever the type prop changes
      },
    },
  },
  methods: {
    async fetchPokemonList() {
      try {
        // Fetches the Pokemon list for the specified type from the API
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${this.type}`);
        const results = response.data.pokemon.map((entry) => entry.pokemon);
        // Fetches additional details for each Pokemon
        const pokemonDataPromises = results.map((pokemon) =>
            axios.get(pokemon.url)
        );
        const pokemonDataResponses = await Promise.all(pokemonDataPromises);
        // Maps the response data to a simplified format for easier use
        this.pokemonList = pokemonDataResponses.map((response) => ({
          name: response.data.name,
          image: response.data.sprites.front_default,
          id: response.data.id,
        }));
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

.pokemon-img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.pokemon-item {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.card {
  width: 200px;
  margin-bottom: 20px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
