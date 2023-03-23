import {
  Timeline,
  BoxCreatePost,
  Form,
  PostsList,
  Message,
  MorePostsButton,
} from "./timelineStyle";
import timeline from "../../assets/timeline.png";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import { HashtagBox } from "../../components/hashtag";
import { useNavigate } from "react-router";
import apiPost from "../../services/apiPost";
import useInterval from "use-interval";
import { BiRefresh } from "react-icons/bi";

export default function TimelinePage() {
  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [button, setButton] = useState("Publish");
  const [loading, setLoading] = useState(false);
  const [loadingApi, setLoadingApi] = useState(true);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [standByPosts, setStandByPosts] = useState([]);
  const [awaitingPosts, setAwaitingPosts] = useState(0);
  const [trends, setTrends] = useState(undefined);
  const navigate = useNavigate();

  function createPost(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = { url, description };
    const promise = axios.post(
      `${process.env.REACT_APP_API_URL}/timeline`,
      body,
      config
    );
    setLoading(true);
    setButton("Publishing...");
    promise.then((res) => {
      setUrl("");
      setDescription("");
      setButton("Publish");
      setLoading(false);
      getPosts();
      getTrends();
    });
    promise.catch((err) => {
      alert("There was an error publishing your link");
      setUrl("");
      setDescription("");
      setButton("Publish");
      setLoading(false);
    });
  }

  function getPosts() {
    apiPost
      .getPostsReq(token)
      .then((res) => {
        setLoadingApi(false);
        setPosts(res.data);
        setStandByPosts([]);
        setAwaitingPosts(0);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }

  function getTrends() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = `${process.env.REACT_APP_API_URL}/top-trending`;
    const promise = axios.get(URL, config);
    promise.then((res) => {
      setTrends(res.data);
    });
    promise.catch((error) => {
      console.log(error.message);
    });
  }

  function navigateTrends(hashtag) {
    navigate(`/hashtag/${hashtag}`);
  }

  function fetchMorePosts() {
    const lastPostId = posts[0] ? posts[0].post_id : 0;
    apiPost
      .getPostsReq(token)
      .then((res) => {
        const newPosts = res.data.filter((post) => post.post_id > lastPostId);
        if (newPosts.length === 0) {
          console.log("No more posts to show");
        } else {
          const newStandByPosts = [...newPosts, ...posts];
          setStandByPosts(newStandByPosts);
          setAwaitingPosts(newPosts.length);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          "An error occured while trying to fetch new posts, please refresh the page"
        );
      });
  }

  function showMorePosts() {
    setPosts(standByPosts);
    setStandByPosts([]);
    setAwaitingPosts(0);
  }

  useInterval(fetchMorePosts, 15000);

  useEffect(() => {
    getPosts();
    getTrends();
  }, []);

  return (
    <>
      <Header></Header>

      <Timeline>
        <img src={timeline} alt="" />
        <BoxCreatePost data-test="publish-box">
          <div>
            <img
              src={user?.img_url || "https://i.imgur.com/6VBx3io.png"}
              alt="profile_picture"
              className="profile_picture"
            />
            <p>What are you going to share today?</p>
          </div>
          <Form onSubmit={createPost}>
            <input
              data-test="link"
              type="text"
              className="url"
              placeholder="https://..."
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
            />
            <input
              data-test="description"
              type="text"
              className="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
            />
            <button data-test="publish-btn" type="submit" disabled={loading}>
              {button}
            </button>
          </Form>
        </BoxCreatePost>
        {loadingApi ? (
          <Message>Loading...</Message>
        ) : posts.length === 0 && !awaitingPosts ? (
          <Message data-test="message">There are no posts yet</Message>
        ) : (
          <PostsList>
            {awaitingPosts > 0 && (
              <MorePostsButton onClick={showMorePosts}>
                {awaitingPosts} new posts, load more! <BiRefresh></BiRefresh>
              </MorePostsButton>
            )}
            {posts?.map((post) => {
              return (
                <Post key={post.post_id} post={post} getPosts={getPosts}></Post>
              );
            })}
          </PostsList>
        )}
        <HashtagBox>
          <h1>trending</h1>
          <div className="linha"></div>
          <ul data-test="trending">
            {trends?.map((trend) => (
              <li
                key={trend.trendName}
                onClick={() => navigateTrends(trend.trendName)}
                data-test="hashtag"
              >
                # {trend.trendName}
              </li>
            ))}
          </ul>
        </HashtagBox>
      </Timeline>
    </>
  );
}
