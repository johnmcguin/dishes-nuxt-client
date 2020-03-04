<template>
  <dif v-if="favorites.length">
    <h2>My Favorites</h2>
    <div class="container">
      <v-row v-for="dish in favorites" :key="dish.id" class="mb-2">
        <dish :dish="dish"></dish>
      </v-row>
    </div>
  </dif>
  <v-row v-else>
    <v-col>
      It looks like you don't have any favorites yet
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Dish from '@/components/dish.vue'
export default {
  components: { Dish },
  middleware: 'authenticated',
  computed: {
    favorites() {
      return this.$store.state.dishes.userFavorites
    }
  },
  async fetch({ store }) {
    await store.dispatch(
      'dishes/GET_USER_FAVORITES',
      store.state.authentication.user.id
    )
  }
}
</script>
