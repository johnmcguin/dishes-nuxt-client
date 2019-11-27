import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  userMadeDishes: []
})
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mutate state
  setUserDishes(state, payload) {
    state.userMadeDishes = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  // mutations must be synchronous, but actions can be async and can call mutations
  async GET_USER_DISHES({ commit }, payload) {
    const { data } = await this.$axios.$get(`/api/users/${payload}/dishes`)
    commit('setUserDishes', data)
  }
}
