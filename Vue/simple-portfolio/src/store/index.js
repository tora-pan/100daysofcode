import { createStore } from "vuex";

const store = createStore({
  state: {
    currentUser: "",
    allUsers: ['travis','sawako'],
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
      state.allUsers.push(payload);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentUser: (state) => state.currentUser,
    getAllUsers: (state) => state.allUsers,
  },
});

export default store;
