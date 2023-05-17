<template>
  <div class="card" @click="selectPokemon">
    <!-- Pokemon image -->
    <img v-if="pokemon.sprites && pokemon.sprites.front_default" :src="pokemon.sprites.front_default" :alt="pokemon.name" class="card-img-top" />
    <div class="card-body">
      <!-- Pokemon name -->
      <h5 class="card-title">{{ pokemon.name }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    selectPokemon() {
      // Emit an event with the selected Pokemon data
      this.$emit('pokemon-selected', this.pokemon);
    }
  }
};
</script>

<style>
.card {
  width: 200px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
