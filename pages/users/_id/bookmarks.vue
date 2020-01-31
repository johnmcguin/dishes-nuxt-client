<template>
  <v-row v-if="bookmarks.length">
    <v-col
      v-for="dish in bookmarks"
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
    <v-col>It looks like you haven't bookmarked any dishes yet</v-col>
  </v-row>
</template>

<script lang="ts">
import Dish from '@/components/dish.vue'
export default {
  components: { Dish },
  middleware: 'authenticated',
  computed: {
    bookmarks() {
      return this.$store.state.dishes.userBookmarks
    }
  },
  async fetch({ store }) {
    await store.dispatch(
      'dishes/GET_USER_BOOKMARKS',
      store.state.authentication.user.id
    )
  }
}
</script>
