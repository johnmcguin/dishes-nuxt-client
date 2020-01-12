import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  followers: [],
  following: []
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mutate state
  setUsers(state, payload) {
    const { followers, following } = payload
    state.followers = followers
    state.following = following
  }
}

export const actions: ActionTree<RootState, RootState> = {
  // mutations must be synchronous, but actions can be async and can call mutations
  async GET_USERS({ commit }, payload) {
    const { data } = await this.$axios.$get(`/api/users/${payload}/follow-data`)
    commit('setUsers', data)
  }
}
