<template>
  <v-layout>
    <v-flex class="text-center">
      <p>
        Welcome to the discover page! This page should probably run some smart
        algorithm to fetch new dishes, maybe prioritizing users the current user
        follows and popularity of the dish.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
