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
import img_link from "../../assets/image 4.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function TimelinePage() {
    const navigate = useNavigate();
    const [button, setButton] = useState("Publish")
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    const [posts, setPosts] = useState(undefined)

    function createPost(e){
        e.preventDefault();
        const body = {url, description}
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, body);
        setLoading(true)
        setButton("Publishing")
        promise.then((res) => {
            setButton("Publish")
            setLoading(true)
            navigate("/timeline");
          });
          promise.catch((err) => alert(err.response.data.message));

    }

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/timeline`;        
        const promise = axios.get(URL);
        promise.then((res) => setPosts(res.data));
        promise.catch(error => console.log(error.data.message))
      }, []);  



  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <div>
          <img src={menu_vector} alt="menu" className="menu" />
          <img
            src={profile}
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
              src={profile}
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
            <button type="submit" disabled={loading}>{button}</button>
          </Form>
          <PostsList>
            <Post>
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
                  <h2>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</h2>
                  <h3>https://medium.com/@pshrmn/a-simple-react-router</h3>
                </div>
                <img src={img_link} alt="" className="link_img"/>
              </LinkPost>
            </Post>
          </PostsList>
        </BoxCreatePost>
      </Timeline>
    </>
  );
}
