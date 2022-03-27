import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuShow: false,
    currPage: '/'
  },
  mutations: {
    showMenu(state) {
      state.isMenuShow = true
    },
    closeMenu(state) {
      state.isMenuShow = false
    },
    toPage(state, url) {
      state.currPage = url
    }
  },
  actions: {
    
  },
  getters: {

  },
})

export default store