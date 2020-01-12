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
      <v-card>
        <v-img
          :src="dish.imgUrl"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
          height="200px"
        >
          <v-card-title v-text="dish.title"></v-card-title>
        </v-img>
        <v-card-text>
          <p>{{ dish.description }}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon color="red lighten-1">mdi-heart-outline</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="yellow darken-2">mdi-bookmark</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col>It looks like you haven't bookmarked any dishes yet</v-col>
  </v-row>
</template>

<script>
export default {
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
