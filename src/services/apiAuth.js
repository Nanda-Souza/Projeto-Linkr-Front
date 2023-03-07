import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function singUp(body) {
  console.log("url: " + BASE_URL);
  return axios.post(`${BASE_URL}/sign-up`, body);
}

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

const apiAuth = {
  singUp,
  signIn,
};

export default apiAuth;
