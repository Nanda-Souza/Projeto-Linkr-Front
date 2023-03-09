import {
  Timeline,
  BoxCreatePost,
  Form,
  PostsList,
  Post,
  LinkPost,
  Message,
} from "./timelineStyle";
import timeline from "../../assets/timeline.png";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import Header from "../../components/header/Header";

export default function TimelinePage() {
  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [button, setButton] = useState("Publish");
  const [loading, setLoading] = useState(false);
  const [loadingApi, setLoadingApi] = useState(true);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

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
    setButton("Publishing");
    promise.then((res) => {
      alert("Post created!");
      setUrl("");
      setDescription("");
      setButton("Publish");
      setLoading(false);
      getPosts();
    });
    promise.catch((err) => {
      alert("There was an error publishing your link");
      setUrl("");
      setDescription("");
      setButton("Publish");
      setLoading(false);
    });
  }

  function getPosts(){
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = `${process.env.REACT_APP_API_URL}/timeline`;
    const promise = axios.get(URL, config);
    promise.then((res) => {
      setLoadingApi(false);
      setPosts(res.data);
    });
    promise.catch((error) => {
      console.log(error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  }


  useEffect(() => {
   getPosts()
  }, []);

  return (
    <>
      <Header></Header>

      <Timeline>
        <img src={timeline} alt="" />
        <BoxCreatePost>
          <div>
            <img
              src={user.img_url}
              alt="profile_picture"
              className="profile_picture"
            />
            <p>What are you going to share today?</p>
          </div>
          <Form onSubmit={createPost}>
            <input
              type="text"
              className="url"
              placeholder="https://..."
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
            />
            <input
              type="text"
              className="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              {button}
            </button>
          </Form>
          {loadingApi ? (
            <Message>Loading...</Message>
          ) : posts.length === 0 ? (<Message>There are no posts yet</Message>) : (
            <PostsList>
              {posts.map((post) => {
                return (
                  <Post key={post.post_id}>
                    <div className="info">
                      <img
                        src={post.user_img_url}
                        alt="profile_picture"
                        className="profile_picture_post"
                      />
                      <p>{post.user_name}</p>
                    </div>
                    <p className="description_post">{post.post_comment}</p>
                    <a href={post.post_link} target="_blank">
                      <LinkPost>
                        <div className="link_details">
                          <h1>{post.post_title}</h1>
                          <h2>{post.post_description}</h2>
                          <h3>{post.post_url}</h3>
                        </div>
                        <img
                          src={post.post_image}
                          alt=""
                          className="link_img"
                        />
                      </LinkPost>
                    </a>
                  </Post>
                );
              })}
            </PostsList>
          )}
        </BoxCreatePost>
      </Timeline>
    </>
  );
}
