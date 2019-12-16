import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  userMadeDishes: [],
  userFavorites: [],
  userBookmarks: []
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mutate state
  setUserDishes(state, payload) {
    state.userMadeDishes = payload
  },

  setUserFavorites(state, payload) {
    state.userFavorites = payload
  },

  setUserBookmarks(state, payload) {
    state.userBookmarks = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  // mutations must be synchronous, but actions can be async and can call mutations
  async GET_USER_DISHES({ commit }, payload) {
    const { data } = await this.$axios.$get(`/api/users/${payload}/dishes`)
    commit('setUserDishes', data)
  },

  async GET_USER_FAVORITES({ commit }, payload) {
    const { data } = await this.$axios.$get(`/api/users/${payload}/favorites`)
    commit('setUserFavorites', data)
  },

  async SET_USER_FAVORITE({ commit }, { userId, dishId }) {
    const { data } = await this.$axios.$post(`/api/users/${userId}/dishes/${dishId}/favorites`)
    commit('setUserFavorites', data)
  },

  async BOOKMARK_DISH({ commit }, { userId, dishId }) {
    const { data } = await this.$axios.$post(`/api/users/${userId}/dishes/${dishId}/bookmarks`)
    commit('setUserBookmarks', data)
  },

  async GET_USER_BOOKMARKS({ commit }, payload) {
    const { data } = await this.$axios.$get(`/api/users/${payload}/bookmarks`)
    commit('setUserBookmarks', data)
  }
}
