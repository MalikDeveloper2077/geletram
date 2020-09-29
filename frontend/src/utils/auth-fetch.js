/* eslint-disable */
import saveToLocalStorage from '@/utils/localstorage-tokens';

const decodeJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64).split('').map((c) => (
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    )).join('')
  );

  return JSON.parse(jsonPayload);
};

export const refreshToken = async (refresh, commit) => {
  const accessToken = await fetch(`http://localhost:8000/token/refresh/`, {
    method: 'POST',
    body: JSON.stringify({ refresh }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const accessJson = await accessToken.json();
  const tokens = { access: accessJson.access, refresh };

  saveToLocalStorage(tokens);
  commit('setTokens', tokens)
}

export const authFetch = async (url, options, commit) => {
  const access = localStorage.getItem('access');
  const refresh = localStorage.getItem('refresh');

  if (!access) {
    window.location.href = '/auth';
  }

  if (!options) {
    options = { headers: {} };
  }

  if (Date.now() >= decodeJwt(access).exp * 1000) {
    refreshToken(refresh, commit);
  }

  const authHeader = { 'Authorization': `Bearer ${access}` };
  options.headers = options.headers
    ? { ...options.headers, ...authHeader }
    : authHeader;

  const response = await fetch(url, options);

  return response;
};
