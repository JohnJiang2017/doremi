<template>
    <div>
      <h1>Scale</h1>
      <button class="btn btn-primary note" v-for="note in notes" v-bind:key="note.name" @click=" () => noteClicked(note.frequency)">
        {{ note.solfege }}
      </button>
    </div>
</template>

<script>
export default {
  name: 'Scale',
  props: {
    notes: Array,
    noteClicked: Function
  }
}
</script>

<style scoped>
 .note {
   margin-right: 1rem;
 }
</style>
