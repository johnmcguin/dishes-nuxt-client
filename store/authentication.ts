import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null,
  isAuthenticated: false
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mutate state
  setUser(state, payload) {
    state.user = payload
    state.isAuthenticated = true
  },

  clearUser(state) {
    state.user = null
    state.isAuthenticated = false
  }
}

export const actions: ActionTree<RootState, RootState> = {
  // mutations must be synchronous, but actions can be async and can call mutations
  async LOGIN({ commit }, payload) {
    const { data } = await this.$axios.$post('/api/auth/login', payload)
    // sets access token globally on axios instance
    this.$axios.setToken(data.accessToken.token, data.accessToken.type)
    commit('setUser', data.user)
    this.$router.push({
      path: '/dishes'
    })
  },

  async LOGOUT({ commit }) {
    await this.$axios.setToken(false) // use to clear default auth header
    commit('clearUser')
    this.$router.push({ path: '/index' })
  }
}
