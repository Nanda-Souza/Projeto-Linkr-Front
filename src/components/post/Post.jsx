import { LinkPost, PostStyled } from "./postStyled";
import { BsPencil } from "react-icons/bs";
import DeletePost from "../deletepost/DeletePost";
import Heart from "../heart/Heart";
import Comment from "../comment/Comment";
import Repost from "../repost/Repost"
import { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router";

export default function Post({ post, getPosts }) {
  const {
    post_comment,
    post_description,
    post_id,
    post_image,
    post_link,
    post_title,
    post_url,
    user_id,
    user_name,
    user_img_url,
    likeInfo,
    commentCount,
    shareCount
  } = post;
  const [comment, setComment] = useState(post_comment);
  const [editPost, setEditPost] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const { token } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const tagStyle = {
    fontWeight: "bold",
    cursor: "pointer",
  };

  function editComment(post_id) {
    setNewComment("");
    setEditPost(!editPost);

    if (!newComment || newComment.trim().length === 0) {
      return;
    }

    const body = { description: newComment };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.patch(
      `${process.env.REACT_APP_API_URL}/posts/${post_id}`,
      body,
      config
    );

    setIsDisable(true);

    promise.then((res) => {
      setComment(newComment);
      setIsDisable(false);
      setEditPost(false);
    });
    promise.catch((error) => {
      setIsDisable(false);
      setNewComment(newComment);
      alert("Something went wrong. Please, try again.");
    });
  }

  function keyDown(e, post_id) {
    if (e.key === "Enter") {
      editComment(post_id);
    }
    if (e.key === "Escape") {
      setNewComment("");
      setEditPost(false);
    }
  }

  function sendEditPost(post_id) {
    if (editPost) {
      editComment(post_id);
    } else {
      setEditPost(true);
    }
  }

  function navigateTrends(tag) {
    const hashtag = tag.replace("#", "");

    navigate(`/hashtag/${hashtag}`);
  }

  useEffect(() => {
    if (editPost) {
      inputRef.current.focus();
    }
  }, [editPost]);

  return (
    <PostStyled key={post_id} data-test="post">
      <div className="header_post">
        <div className="info">
          <img
            src={user_img_url}
            alt="profile_picture"
            className="profile_picture_post"
            onClick={() => navigate(`/user/${user_id}`)}
          />
          <p data-test="username" onClick={() => navigate(`/user/${user_id}`)}>
            {user_name}
          </p>
        </div>
        {user.id === user_id && (
          <div className="buttons">
            <BsPencil
              data-test="edit-btn"
              color="white"
              size={17}
              onClick={() => sendEditPost(post_id)}
            />
            <DeletePost getPosts={getPosts} post_id={post_id} />
          </div>
        )}
      </div>
      <Heart likeInfo={likeInfo} />
      <Comment commentCount={commentCount} post_id={post_id}/>
      <Repost shareCount={shareCount} post={post}/>
      {editPost ? (
        <input
          data-test="edit-input"
          className="edit_comment"
          type="text"
          ref={inputRef}
          disabled={isDisable}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => keyDown(e, post_id)}
        />
      ) : (
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(tag) => navigateTrends(tag)}
        >
          <p data-test="description" className="description_post">
            {comment}
          </p>
        </ReactTagify>
      )}
      <a href={post_link} target="_blank" data-test="link">
        <LinkPost>
          <div className="link_details">
            <h1>{post_title}</h1>
            <h2>{post_description}</h2>
            <h3>{post_url}</h3>
          </div>
          <img src={post_image} alt="" className="link_img" />
        </LinkPost>
      </a>
    </PostStyled>
  );
}
