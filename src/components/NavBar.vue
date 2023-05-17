<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- Brand logo with home link -->
      <router-link to="/" class="navbar-brand">My PokeDex</router-link>
      <!-- Navbar toggler button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Navigation links -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Types</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">All Pokemon</router-link>
          </li>
          <!-- Add more navigation links as needed -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
