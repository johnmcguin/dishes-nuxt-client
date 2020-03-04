<template>
  <div>
    <h4>Following (need to extend API to attach profile and profile images)</h4>
    <v-row v-for="user in following" :key="user.id">
      <v-col cols="4" sm="2" md="1">
        <v-avatar v-if="user.userProfileImg" size="75">
          <v-img :src="user.userProfileImg"> </v-img>
        </v-avatar>
        <v-avatar v-else color="indigo" size="75">
          <span class="white--text headline">user.username</span>
        </v-avatar>
      </v-col>
    </v-row>
    <h4>Followers (need to extend API to attach profile and profile images)</h4>
    <v-row v-for="user in followers" :key="user.id">
      <v-col cols="4" sm="2" md="1">
        <v-avatar v-if="user.userProfileImg" size="75">
          <v-img :src="user.userProfileImg"> </v-img>
        </v-avatar>
        <v-avatar v-else color="indigo" size="75">
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
    followers() {
      return this.$store.state.community.followers
    },
    following() {
      return this.$store.state.community.following
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
