<template>
  <div v-if="userMadeDishes.length">
    <h2>My Dishes</h2>
    <div class="container">
      <v-row v-for="dish in userMadeDishes" :key="dish.id" class="mb-2">
        <dish :dish="dish"></dish>
      </v-row>
    </div>
  </div>
  <v-row v-else>
    <v-col>It looks like you haven't posted any dishes yet</v-col>
  </v-row>
</template>

<script lang="ts">
import Dish from '@/components/dish.vue'
export default {
  components: { Dish },
  middleware: 'authenticated',
  computed: {
    userMadeDishes() {
      return this.$store.state.dishes.userMadeDishes
    },
    userId() {
      return this.$store.state.authentication.user.id
    }
  },
  async fetch({ store }) {
    await store.dispatch(
      'dishes/GET_USER_DISHES',
      store.state.authentication.user.id
    )
  }
}
</script>
