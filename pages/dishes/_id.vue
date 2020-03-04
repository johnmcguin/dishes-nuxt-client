<template>
  <div>
    <v-img :src="dish.imgUrl" height="500"></v-img>
    <h2>{{ dish.title }}</h2>
    <p>{{ dish.description }}</p>
    <h2>Instructions</h2>
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="step in dish.steps" :key="step.id">
        <v-expansion-panel-header>{{
          step.stepNumber
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ step.instruction }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
export default {
  middleware: 'authenticated',
  computed: {
    dish() {
      return this.$store.state.dishes.dishDetails
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('dishes/GET_DISH_DETAILS', params.id)
  }
}
</script>
