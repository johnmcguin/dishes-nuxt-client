<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>hello {{ msg }}</v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.test.message
    }
  }
}
</script>
