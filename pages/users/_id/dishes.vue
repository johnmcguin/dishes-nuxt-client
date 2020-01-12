<template>
  <div v-if="userMadeDishes.length">
    <h2>My Dishes</h2>
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
            :src="dish.imgUrl"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
            height="200px"
          >
            <v-card-title v-text="dish.title"></v-card-title>
          </v-img>
          <v-card-text>
            <p>{{ dish.description }}</p>
            <p>
              <span
                >Avg Rating:
                <v-rating
                  v-model="dish.average_rating"
                  dense
                  half-increments
                  color="yellow darken-2"
                  background-color="yellow darken-2"
                ></v-rating>
              </span>
            </p>
            <p>
              <span
                >Your Rating:
                <v-rating
                  v-model="dish.user_rating"
                  dense
                  hover
                  color="yellow darken-2"
                  background-color="yellow darken-2"
                ></v-rating>
              </span>
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="favorite({ userId, dishId: dish.id })">
              <v-icon v-if="dish.user_favorited === '0'" color="red lighten-1"
                >mdi-heart-outline</v-icon
              >
              <v-icon v-else color="red lighten-1">mdi-heart</v-icon>
            </v-btn>

            <v-btn icon @click="bookmark({ userId, dishId: dish.id })">
              <v-icon
                v-if="dish.user_bookmarked === '0'"
                color="yellow darken-2"
                >mdi-bookmark-outline</v-icon
              >
              <v-icon v-else color="yellow darken-2">mdi-bookmark</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <v-row v-else>
    <v-col>It looks like you haven't posted any dishes yet</v-col>
  </v-row>
</template>

<script>
export default {
  // TODO: user mapState and mapActions in all components
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
  },
  methods: {
    async favorite({ userId, dishId }) {
      await this.$store.dispatch('dishes/SET_USER_FAVORITE', { userId, dishId })
    },
    async bookmark({ userId, dishId }) {
      await this.$store.dispatch('dishes/BOOKMARK_DISH', { userId, dishId })
    }
  }
}
</script>
