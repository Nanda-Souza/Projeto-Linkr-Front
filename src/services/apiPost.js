import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function authToken(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getPostsReq(token) {
  return axios.get(`${BASE_URL}/timeline`, authToken(token));
}

function likePostReq(isLiked, postId, token) {
  if (!isLiked) {
    return axios.post(
      `${BASE_URL}/like`,
      { postId: Number(postId) },
      authToken(token)
    );
  } else {
    return axios.delete(`${BASE_URL}/like/${postId}`, authToken(token));
  }
}

function deleteAPost(postId, token) {
  return axios.delete(`${BASE_URL}/posts/${Number(postId)}`, authToken(token));
}
export const apiPost = {
  likePostReq,
  deleteAPost,
  getPostsReq,
};

export default apiPost;
