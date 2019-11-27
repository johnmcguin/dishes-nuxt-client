<template>
  <v-row>
    <v-col
      v-for="dish in userMadeDishes"
      :key="dish.id"
      xs="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card>
        <v-img
          src="https://via.placeholder.com/750"
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
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'authenticated',

  async fetch({ store }) {
    console.log(store.state.authentication)
    await store.dispatch(
      'dishes/GET_USER_DISHES',
      store.state.authentication.user.id
    )
  },

  computed: {
    userMadeDishes() {
      return this.$store.state.dishes.userMadeDishes
    }
  }
}
</script>
