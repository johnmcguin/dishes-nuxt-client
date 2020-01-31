<template>
  <v-card>
    <v-img
      :src="dish.imgUrl"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title>{{ dish.title }}</v-card-title>
    </v-img>

    <v-card-actions>
      <v-rating
        v-model="dish.userRating"
        dense
        hover
        small
        color="yellow darken-2"
        background-color="yellow darken-2"
      ></v-rating>
      <v-spacer></v-spacer>

      <v-btn icon @click="favorite({ userId, dishId: dish.id })">
        <v-icon v-if="!dish.userFavorited" color="red lighten-1"
          >mdi-heart-outline</v-icon
        >
        <v-icon v-else color="red lighten-1">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon @click="bookmark({ userId, dishId: dish.id })">
        <v-icon v-if="!dish.userBookmarked" color="yellow darken-2"
          >mdi-bookmark-outline</v-icon
        >
        <v-icon v-else color="yellow darken-2">mdi-bookmark</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { PropOptions } from 'vue'
import { mapActions } from 'vuex'
import { Dish } from '@/types'

export default {
  props: {
    dish: {
      type: Object,
      required: true
    } as PropOptions<Dish>
  },
  methods: {
    ...mapActions({
      favorite: 'dishes/SET_USER_FAVORITE',
      bookmark: 'dishes/BOOKMARK_DISH'
    })
  }
}
</script>
