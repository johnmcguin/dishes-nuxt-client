export default function({ store, redirect }) {
    if (store.state.authentication.isAuthenticated) {
      return redirect('/')
    }
  }
  