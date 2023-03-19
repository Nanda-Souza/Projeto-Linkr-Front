import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function likePostReq(isLiked, postId, token) {
  if (!isLiked) {
    return axios.post(
      `${BASE_URL}/like`,
      { postId: Number(postId) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else {
    return axios.delete(`${BASE_URL}/like/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

function deleteAPost(postId, token) {
  return axios.delete(`${BASE_URL}/posts/${Number(postId)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export const apiPost = {
    likePostReq,
  deleteAPost,
};


export default likePostReq

