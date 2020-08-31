export default (tokens) => {
  localStorage.setItem('access', tokens.access);
  localStorage.setItem('refresh', tokens.refresh);
};
