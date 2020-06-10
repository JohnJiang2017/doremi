<template>
    <div>
      <h1>{{specises}} for adpotion</h1>
      <b-table striped hover :items="pets">
        <template v-slot:cell(name)="data">
          <router-link :to="`/pets/${specises}/${data.index}`">{{ data.value}}</router-link>
        </template>
      </b-table>
    </div>
</template>

<script>
export default {
  name: 'PetTable',
  props: {
    specises: String,
    pets: Array
  }
}
</script>
