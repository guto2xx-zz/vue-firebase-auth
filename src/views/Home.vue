<template>
  <div class="home">
    <Pokemon :pokemonList="pokemonList" />
    <button @click="sair">Sair</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemon from "@/components/Pokemon.vue"
import firebase from "firebase"
import axios from "axios"

export default {
  name: "Home",
  components: {
    Pokemon,
  },
  data() {
    return {
      pokemonList: null,
    }
  },
  methods: {
    sair: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login")
        })
    },
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=999").then(response => {
      this.pokemonList = response.data
    })
  },
}
</script>
