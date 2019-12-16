<template>
  <div>
    <v-row v-for="user in users" :key="user.id">
      <v-col cols="4" sm="2" md="1">
        <v-avatar v-if="user.userProfileImg" size="50">
          <v-img :src="user.userProfileImg"> </v-img>
        </v-avatar>
        <v-avatar v-else color="indigo" size="50">
          <!-- TODO: display the initials and a dynamic, theme based color -->
          <span class="white--text headline">user.username</span>
        </v-avatar>
      </v-col>
    </v-row>
  </div>
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
