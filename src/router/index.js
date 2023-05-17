import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonType from "@/components/PokemonType";
import PokemonList from "@/components/PokemonList";
import PokemonDetails from "@/components/PokemonDetails";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AllPokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    name: 'PokemonType',
    path: '/pokemon/:type', // Define the dynamic parameter
    component: PokemonType
  },
  {
    name: 'PokemonList',
    path: '/pokemon/:type',
    component: PokemonList,
    props: true
  },
  { path: '/', redirect: '/pokemon' },
  { path: '/pokemon', component: PokemonList },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    component: PokemonDetails,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
