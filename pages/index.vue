<template>
  <login></login>
</template>
<script>
import Login from '../components/login'
export default {
  components: {
    Login
  },
  computed: {
    msg() {
      return this.$store.state.authentication.message
    }
  }
}
</script>
