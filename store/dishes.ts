import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  userMadeDishes: [],
  userFavorites: []
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mutate state
  setUserDishes(state, payload) {
    state.userMadeDishes = state.userMadeDishes.length ? state.userMadeDishes.concat(payload) : payload
  },

  setUserFavorites(state, payload) {
    state.userFavorites = state.userFavorites.length ? state.userFavorites.concat(payload) : payload
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

  async SET_USER_BOOKMARK({ commit }, { userId, dishId }) {
    const { data } = await this.$axios.$post(`/api/users/${userId}/dishes/${dishId}/bookmarks`)
    commit('setUserBookmarks', data)
  }
}
