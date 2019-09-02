export default {
  state: {
    message: "Это vuex, детка!"
  },
  action: {},
  mutation: {},
  getters: {
    getMessage(state) {
      return state.message;
    }
  }
};
