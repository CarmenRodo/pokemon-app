<template>
  <div class="container">
    <h2>All Pokemon List</h2>
    <!-- Search bar -->
    <div class="search-bar">
      <input type="text" class="form-control" v-model="searchQuery" placeholder="Search Pokemon" @input="searchPokemon" />
    </div>
    <!-- Pokemon list -->
    <div class="row">
      <div class="col-md-4" v-for="pokemon in filteredPokemonList" :key="pokemon.name">
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
  data() {
    return {
      pokemonList: [],    // Holds the list of all Pokemon
      searchQuery: '',    // Stores the search query entered by the user
    };
  },
  mounted() {
    this.fetchAllPokemonList();    // Fetches the list of all Pokemon on component mount
  },
  methods: {
    async fetchAllPokemonList() {
      try {
        // Fetches the list of Pokemon from the API
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        // Maps the response data to a simplified format for easier use
        this.pokemonList = response.data.results.map((pokemon) => ({
          name: pokemon.name,
          id: this.extractPokemonId(pokemon.url),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.extractPokemonId(pokemon.url)}.png`,
        }));
      } catch (error) {
        console.log(error);
      }
    },
    extractPokemonId(url) {
      // Extracts the Pokemon ID from the URL
      const parts = url.split('/');
      return parts[parts.length - 2];
    },
    searchPokemon() {
      // Converts the search query to lowercase
      const searchQuery = this.searchQuery.toLowerCase();
      // Filters the Pokemon list based on the search query
      this.filteredPokemonList = this.pokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery)
      );
    },
  },
  computed: {
    filteredPokemonList() {
      return this.pokemonList;    // Initially, displays the complete list of Pokemon
    },
  },
};
</script>

<style scoped>
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

.search-bar {
  margin-bottom: 20px;
}
</style>
