<template>
  <v-card outlined width="100%" nuxt :to="`/dishes/${dish.id}`">
    <v-row class="justify-start">
      <v-col sm="4" md="2" lg="2" xl="1" class="py-0">
        <v-img
          :src="dish.imgUrl"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="150px"
          width="150px"
        >
          <v-card-title>{{ dish.title }}</v-card-title>
        </v-img>
      </v-col>
      <v-col sm="8" md="10" lg="10" xl="11" class="py-0 pl-0">
        <v-card-text class="pl-0">
          {{ dish.description }}
        </v-card-text>
      </v-col>
    </v-row>
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
