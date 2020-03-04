<template>
  <div v-if="bookmarks.length">
    <h2>My Bookmarks</h2>
    <div class="container">
      <v-row v-for="dish in bookmarks" :key="dish.id" class="mb-2">
        <dish :dish="dish"></dish>
      </v-row>
    </div>
  </div>
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
