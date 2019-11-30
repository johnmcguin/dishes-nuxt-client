import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  users: []
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mutate state
  setUsers(state, payload) {
    state.users = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  // mutations must be synchronous, but actions can be async and can call mutations
  async GET_USERS({ commit }, payload) {
    const { data } = await this.$axios.$get(`/api/users`)
    commit('setUsers', data)
  }
}
