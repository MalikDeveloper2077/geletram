export default {
  state: {},
  actions: {
    async createUser({ commit, getters }, userData) {
      const response = await fetch(`${getters.serverUrl}/users/`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const responseText = await response.json();
        const responseError = `${Object.keys(responseText)[0]}: ${Object.values(responseText)[0]}`;
        commit('setError', responseError);
        throw new Error(`Authorization error: ${responseError}`);
      }

      commit('setUserInfo', await response.json());
    },
  },
};
