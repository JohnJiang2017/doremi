<template>
    <div>
      <h2>Scale Quiz</h2>
      <h3>Correct: {{ correctCount }} / Error: {{ errorCount }} / Total: {{ totalAnswered }}</h3>
      <br/>
      <h3><button class="btn btn-primary note" @click="playQuestion">Listen</button></h3>
      <b-form-group label="Individual radios">
        <div v-for="(answer, index) in answers" :key="index">
          <b-form-radio v-model="selectedIndexInAnswers" name="some-radios" :value="index"><i v-for="(note, index2) in answer" :key="index2">{{ note.solfege }} </i></b-form-radio>
        </div>
      </b-form-group>
      <button class="btn btn-primary note" @click="answerQuestion">Answer</button>
      <button class="btn btn-secondary note" @click="nextQuestion">Next</button>
    </div>
</template>

<script>
export default {
  name: 'ScaleQuiz',
  data () {
    return {
      correctCount: 0,
      errorCount: 0,
      totalAnswered: 0,
      question: [],
      answers: [],
      questionIndexInAnswers: null,
      selectedIndexInAnswers: null
    }
  },
  props: {
    notes: Array,
    playNote: Function,
    lengthOfEachQuestion: {
      type: Number,
      default: 3
    },
    totalQuestions: {
      type: Number,
      default: 5
    },
    numberOfAnswers: {
      type: Number,
      default: 3
    }
  },

  methods: {
    answerQuestion () {
      this.totalAnswered += 1

      if (this.selectedIndexInAnswers === this.questionIndexInAnswers) {
        this.correctCount++
      } else {
        this.errorCount++
      }
    },
    async nextQuestion () {
      // generate answers
       // eslint-disable-line 
      // eslint-disable-next-line
      // debugger;
      this.answers = []
      for (let i = 0; i < this.numberOfAnswers; i++) {
        const tmp = []
        for (let j = 0; j < this.lengthOfEachQuestion; j++) {
          const randomIndx = Math.floor(Math.random() * this.notes.length)
          tmp.push(this.notes[randomIndx])
        }
        this.answers.push(tmp)
      }
      this.questionIndexInAnswers = Math.floor(Math.random() * this.numberOfAnswers)
      this.question = this.answers[this.questionIndexInAnswers]
      this.selectedIndexInAnswers = null
      this.playQuestion()
    },
    playNoteAndWait (frequency, duration) {
      return new Promise((resolve) => {
        this.$props.playNote(frequency, duration)
        setTimeout(resolve, duration + 200)
      })
    },
    async playQuestion () {
      for (const note of this.question) {
        await this.playNoteAndWait(note.frequency, 500)
      }
    }
  }
}
</script>

<style scoped>
 .note {
   margin-right: 1rem;
 }
</style>
