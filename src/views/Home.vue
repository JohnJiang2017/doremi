<template>
  <div class="home-view-container">
    <h1>Adopt a new vele vele best friend (Totoal: {{ animalsCount }})</h1>
    {{ getAllCats.length }}
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>
    <button class="btn btn-primary" @click="playSound">Play</button>
    <Scale :notes="notes" :noteClicked="playNote" />
    <ScaleQuiz :notes="notes" :playNote="playNote" />

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group
        id="exampleInputGroup1"
        label="Pet's Name:"
        label-for="aaa"
        description="description"
      >
        <b-form-input
          id=""
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter Pet's Name" />
      </b-form-group>
      <b-form-group
        id="exampleInputGroup1"
        label="Species:"
        label-for="aaa"
        description="description"
      >
        <b-form-select :options="['cats', 'dogs']"
          v-model="formData.species"
          required
          placeholder="Enter Pet's Name" />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup1"
        label="Pet's Age:"
        label-for="aaa"
        description="description"
      >
        <b-form-input
          id=""
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter Pet's Age" />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="submit" variant="danger">Reset</b-button>

    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters, mapState } from 'vuex'
import Scale from '@/components/Scale.vue'
import ScaleQuiz from '@/components/ScaleQuiz.vue'

export default {
  name: 'Home',
  components: {
    Scale, ScaleQuiz
  },
  data () {
    return {
      showPetForm: false,
      playing: false,
      oscillator: null,
      interval: null,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats']),
    ...mapState(['notes', 'soundHelper'])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    playNote (freq) {
      this.$store.state.soundHelper.playSound(freq, 500)
    },
    playSound () {
      this.playing = !this.playing
      if (this.playing) {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        this.oscillator = audioCtx.createOscillator()
        var gainNode = audioCtx.createGain()
        this.oscillator.connect(gainNode)
        gainNode.connect(audioCtx.destination)
        this.oscillator.type = this.types
        this.oscillator.frequency.value = 440
        this.oscillator.start()
        this.interval = setInterval(() => {
          this.oscillator.frequency.value = Math.floor(this.oscillator.frequency.value * 1.05946)
          console.log(this.oscillator.frequency)
        }, 1000)
      } else {
        this.oscillator.stop()
        clearInterval(this.interval)
      }
    },
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payLoad = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payLoad)

      // clear form after addig a new pet
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
