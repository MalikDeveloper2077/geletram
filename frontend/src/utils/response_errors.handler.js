/* eslint-disable prefer-destructuring */

export default (responseJson, commit) => {
  let responseError = Object.values(responseJson)[0];
  if (responseError instanceof Array) {
    responseError = responseError[0];
  }

  commit('setError', responseError);
  throw new Error(`Error: ${responseError}`);
};
