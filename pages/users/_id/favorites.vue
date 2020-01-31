<template>
  <v-row v-if="favorites.length">
    <v-col
      v-for="dish in favorites"
      :key="dish.id"
      xs="12"
      sm="6"
      md="4"
      lg="3"
    >
      <dish :dish="dish"></dish>
    </v-col>
  </v-row>
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
