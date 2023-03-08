import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function singUp(body) {
  console.log("url: " + BASE_URL);
  return axios.post(`${BASE_URL}/sign-up`, body);
}

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

function getUser(token) {
  return axios.get(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const apiAuth = {
  singUp,
  signIn,
  getUser,
};

export default apiAuth;
