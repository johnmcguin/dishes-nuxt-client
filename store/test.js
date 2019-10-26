export const state = () => ({
  message: 'vuex'
})

export const mutations = {
  increment(msg) {
    state.message = msg
  }
}
