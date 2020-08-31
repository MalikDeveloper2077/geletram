export default (responseJson, commit) => {
  const responseError = `${Object.keys(responseJson)[0]}: ${Object.values(responseJson)[0]}`;
  commit('setError', responseError);
  throw new Error(`Error: ${responseError}`);
};
