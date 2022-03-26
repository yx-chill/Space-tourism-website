import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuShow: false
  },
  mutations: {
    showMenu(state) {
      state.isMenuShow = true
    },
    closeMenu(state) {
      state.isMenuShow = false
    }
  },
  actions: {
    
  },
  getters: {

  },
})

export default store