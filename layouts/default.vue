<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <!-- TODO: look into using nuxt-link component with these -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- TODO: text color styles globally when against primary background -->
    <v-app-bar :clipped-left="clipped" fixed app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-icon v-if="isAuthed">mdi-account-circle-outline</v-icon>
    </v-app-bar>
    <!-- Main Content Hook -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- footer -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'Dishes'
    }
  },
  computed: {
    isAuthed() {
      return this.$store.state.authentication.isAuthenticated
    },
    userId() {
      return this.$store.state.authentication.user.id
    },
    items() {
      return this.navigation(this.isAuthed)
    }
  },
  methods: {
    navigation(isAuthenticated) {
      return isAuthenticated ? this.fullNav() : this.guestNav()
    },
    fullNav() {
      return [
        ...this.guestNav(),
        {
          icon: 'mdi-magnify',
          title: 'Discover',
          to: '/discover'
        },
        {
          icon: 'mdi-food-apple-outline',
          title: 'My Dishes',
          to: `/users/${this.userId}/dishes`
        },
        {
          icon: 'mdi-heart-outline',
          title: 'My Favorites',
          to: `/users/${this.userId}/favorites`
        },
        {
          icon: 'mdi-bookmark-outline',
          title: 'My Bookmarks',
          to: `/users/${this.userId}/bookmarks`
        },
        {
          icon: 'mdi-account-search-outline',
          title: 'Community',
          to: '/community'
        }
      ]
    },
    guestNav() {
      return [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
          hasPermission: this.isAuthed
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.v-application {
  font-family: 'Open Sans', sans-serif;
}
.v-toolbar__title {
  font-family: 'Pacifico', cursive;
}
</style>
