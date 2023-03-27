import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function authToken(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getPostsReq(token, lastPostId) {
  console.log("lastPostId: " + lastPostId);
  if (lastPostId)
    return axios.get(
      `${BASE_URL}/timeline?oldestPost=${lastPostId}?limit=10`,
      authToken(token)
    );
  return axios.get(`${BASE_URL}/timeline?limit=10`, authToken(token));
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

function getNewPostsReq(token, lastPostId) {
  return axios.get(
    `${BASE_URL}/timeline?newestPost=${lastPostId}`,
    authToken(token)
  );
}

function deleteAPost(postId, token) {
  return axios.delete(`${BASE_URL}/posts/${Number(postId)}`, authToken(token));
}

function createPost(token, post_id, post_url, post_description, original_post_id) {    
  const url = post_url
  const description = post_description
  const repost = true
  let originalId = Number(post_id)  
  
  
  if (original_post_id != null){    
    originalId = Number(original_post_id)
  }
 console.log(originalId)

  const body = { url, description, repost, originalId};
  console.log(body)
  return axios.post(
    `${process.env.REACT_APP_API_URL}/timeline`,
    body,
    authToken(token)
  );  
}

function getCommentsReq(postId, token) {
  return axios.get(`${BASE_URL}/comment/${Number(postId)}`, authToken(token));
}
export const apiPost = {
  likePostReq,
  deleteAPost,
  getPostsReq,
  getNewPostsReq,
  getCommentsReq,
  createPost
};

export default apiPost;
