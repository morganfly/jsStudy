const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commint }) {
      commit("increment");
    }
  },
  getter: {
    addCount: state => {
      return state.count++;
    }
  }
});
