<template>
  <v-row>
    <v-col v-for="user in users" :key="user.id" xs="12" sm="6" md="4" lg="3">
      <v-card>
        <v-img
          :src="'https://i.pravatar.cc/150?img=' + user.id"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
          height="200px"
        >
        </v-img>
        <v-card-text>
          <p>
            {{ user.username }} |
            <span
              ><small>member since {{ user.createdAt }}</small></span
            >
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <p>display a count of recipes perhaps?</p>
          <v-btn>follow</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'authenticated',
  computed: {
    users() {
      return this.$store.state.community.users
    }
  },

  async fetch({ store }) {
    await store.dispatch(
      'community/GET_USERS',
      store.state.authentication.user.id
    )
  }
}
</script>
