import {
  Timeline,
  Message,
} from "../timeline/timelineStyle";
import { UserPosts, UserTitle } from "./userProfileStyle";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import { HashtagBox } from "../../components/hashtag";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { Follow } from "../../components/follow/followButton";

export default function UserProfile() {
  const { token, user } = useContext(AuthContext);
  const [loadingApi, setLoadingApi] = useState(true);
  const [posts, setPosts] = useState([]);
  const [trends, setTrends] = useState(undefined);
  const navigate = useNavigate();
  const { id } = useParams();


  function getPosts() {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = `${process.env.REACT_APP_API_URL}/user/${id}`;
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

  useEffect(() => {
    getPosts();
    getTrends();
  }, [id]);
  if(posts === null){
    return (<><Header/>
    <Message>User not found</Message>
    </>)
  }
  return (
    <>
      <Header />

      <Timeline>
        {loadingApi ? (
          <Message>Loading...</Message>
        ) : posts.posts.length === 0 ? (<>
          <UserTitle>
              <div className="name_and_photo">
                <img src={posts.user.img_url} alt={"Foto de perfil"} />
                <h1>{posts.user.name}'s posts</h1>
              </div>
              {parseInt(user.id) !== parseInt(id) ? <Follow /> : null}
            </UserTitle>
          <Message>There are no posts yet</Message></>
        ) : (
          <>
            <UserTitle>
              <div className="name_and_photo">
                <img src={posts.user.img_url} alt={"Foto de perfil"} />
                <h1>{posts.user.name}'s posts</h1>
              </div>
              {parseInt(user.id) !== parseInt(id) ? <Follow /> : null}
            </UserTitle>
           
            <UserPosts data-test="post">
              {posts.posts?.map((post) => {
                return (
                  <Post
                    key={post.post_id}
                    post={post}
                    getPosts={getPosts}
                  ></Post>
                );
              })}
            </UserPosts>
          </>
        )}

        <HashtagBox>
          <h1>trending</h1>
          <div className="linha"></div>
          <ul>
            {trends?.map((trend) => (
              <li
                key={trend.trendName}
                onClick={() => navigateTrends(trend.trendName)}
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

