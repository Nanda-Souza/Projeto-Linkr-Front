import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function authToken(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function singUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

function getUser(token) {
  return axios.get(`${BASE_URL}/users/me`, authToken(token));
}

const apiAuth = {
  singUp,
  signIn,
  getUser,
};

export default apiAuth;
