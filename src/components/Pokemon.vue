<template>
  <div class="pokemon" v-if="pokemonList">
    <select name="" id="" @change="searchPokemon">
      <option value="">Selecione um Pokemon</option>
      <option
        v-for="pokemon in pokemonList.results"
        :key="pokemon.name"
        :value="pokemon.name"
        :url="pokemon.url"
      >
        {{ pokemon.name }}
      </option>
    </select>

    <div v-if="selectedPokemon" class="pokemon_data">
      <img :src="selectedPokemon.sprites.front_default" alt="front" />
      <img
        v-if="selectedPokemon.sprites.back_default"
        :src="selectedPokemon.sprites.back_default"
        alt="back"
      />

      <label>{{ selectedPokemon.types.map(e => e.type.name).join("/") }}</label>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Pokemon",
  data() {
    return {
      selectedPokemon: null,
    }
  },
  props: {
    pokemonList: Object,
  },
  methods: {
    searchPokemon: function(e) {
      const url = e.target.options[e.target.selectedIndex].getAttribute("url")

      axios.get(url).then(response => {
        this.selectedPokemon = response.data
        console.log(this.selectedPokemon)
      })
    },
  },
}
</script>

<style scoped></style>
