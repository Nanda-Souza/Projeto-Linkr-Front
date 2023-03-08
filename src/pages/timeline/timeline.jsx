import {
  Timeline,
  BoxCreatePost,
  Form,
  PostsList,
  Post,
  LinkPost,
} from "./timelineStyle";
import { Header } from "../../components/header";
import logo from "../../assets/linkr.png";
import menu_vector from "../../assets/Vector (2).png";
import profile from "../../assets/image 3.png";
import timeline from "../../assets/timeline.png";
import img_link from "../../assets/image 4.png";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";

export default function TimelinePage() {
  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [button, setButton] = useState("Publish");
  const [loading, setLoading] = useState(false);
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
      navigate("/timeline");
    });
    promise.catch((err) => {
      alert("There was an error publishing your link");
      setUrl("");
      setDescription("");
      setButton("Publish");
      setLoading(false);
      navigate("/timeline");
    });
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = `${process.env.REACT_APP_API_URL}/timeline`;
    const promise = axios.get(URL, config);
    promise.then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
    promise.catch((error) => {
      console.log(error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <div>
          <img src={menu_vector} alt="menu" className="menu" />
          <img
            src={user.img_url}
            alt="profile_picture"
            className="profile_picture"
          />
        </div>
      </Header>
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
          <PostsList>
            {posts.map((post) => {
              return (
                <Post>
                  <div className="info">
                    <img
                      src={post.user_img_url}
                      alt="profile_picture"
                      className="profile_picture_post"
                    />
                    <p>{post.user_name}</p>
                  </div>
                  <p className="description_post">{post.post_comment}</p>
                  <LinkPost>
                    <div className="link_details">
                      <h1>{post.post_title}</h1>
                      <h2>{post.post_description}</h2>
                      <h3>{post.post_url}</h3>
                    </div>
                    <img src={post.post_image} alt="" className="link_img" />
                  </LinkPost>
                </Post>
              );
            })}

            {/* <Post>
              <div className="info">
                <img
                  src={profile}
                  alt="profile_picture"
                  className="profile_picture_post"
                />
                <p>Juvenal Juvêncio</p>
              </div>
              <p className="description_post">Olha esse link, muito topeeeee</p>
              <LinkPost>
                <div className="link_details">
                  <h1>Como aplicar o Material UI em um projeto React</h1>
                  <h2>
                    Hey! I have moved this tutorial to my personal blog. Same
                    content, new location. Sorry about making you click through
                    to another page.
                  </h2>
                  <h3>https://medium.com/@pshrmn/a-simple-react-router</h3>
                </div>
                <img src={img_link} alt="" className="link_img" />
              </LinkPost>
            </Post> */}
          </PostsList>
        </BoxCreatePost>
      </Timeline>
    </>
  );
}
