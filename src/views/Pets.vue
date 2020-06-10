<template>
    <div v-if="pet">
      <h1>{{ pet.name }} ({{ $route.params.species }})</h1>
      <p>Age: {{ pet.age }}</p>
      <p>Breed: {{ pet.breed }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pet',
  data () {
    return {
      pet: null
    }
  },
  computed: {
    // cats () {
    //   return this.$store.state.cats
    // },
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animals = this[this.$route.params.species]
    const pet = animals[this.$route.params.id]
    this.pet = pet
  }
}
</script>
