<script>
import { mapState } from 'vuex'
/* eslint-disable-next-line */
import ScaleQuiz from '@/components/ScaleQuiz.vue'
import Scale from '@/components/Scale.vue'

export default {
  components: {
    ScaleQuiz, Scale
  },
  computed: {
    ...mapState(['notes', 'soundHelper'])
  },
  data () {
    return {
      myNotes: this.$store.state.notes.filter(note => note.solfege !== 'fa' && note.solfege !== 'ti')
    }
  },
  methods: {
    playNote (freq) {
      this.soundHelper.playSound(freq, 500)
    }
  }

}
</script>

<template>
  <div>
    <div>Pentatonic Scale</div>
    <Scale :notes="myNotes" :noteClicked="playNote" />
    <ScaleQuiz :notes="myNotes" :playNote="playNote" />
  </div>
</template>
