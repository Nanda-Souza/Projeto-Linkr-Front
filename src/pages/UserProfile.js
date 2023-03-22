import {
    Timeline,
    BoxCreatePost,
    PostsList,
    Message,
  } from "./timeline/timelineStyle";
  import { useState, useEffect, useContext } from "react";
  import axios from "axios";
  import { AuthContext } from "../contexts/authContext";
  import Header from "../components/header/Header";
  import Post from "../components/post/Post";
  import { HashtagBox } from "../components/hashtag";
  import { useNavigate } from "react-router";
  import { useParams } from "react-router-dom"
import styled from "styled-components";
  
  
  export default function UserProfile() {
    const { token } = useContext(AuthContext);
    const [loadingApi, setLoadingApi] = useState(true);
    const [posts, setPosts] = useState([]);
    const [trends, setTrends] = useState(undefined)  
    const navigate = useNavigate();
    const {id} = useParams();
  
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
      promise.catch(error => {
        console.log(error.message);
    });  
    }
  
    function navigateTrends(hashtag){
      navigate(`/hashtag/${hashtag}`)    
    }
  
    useEffect(() => {
      getPosts();
      getTrends();
    }, [id]);
  
    return (
      <>
        <Header/>
  
        <Timeline>
          
            {loadingApi ? (
              <Message>Loading...</Message>
            ) : posts.length === 0 ? (
              <Message>There are no posts yet</Message>
            ) : (
              <>
              <UserTitle><img src={posts[0].user_img_url} alt={'Foto de perfil'}/>
              <h1>{posts[0].user_name}'s posts</h1>
              </UserTitle>
              <UserPosts data-test="post">
                
                {posts?.map((post) => {
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
                  <li key={trend.trendName} onClick={() => navigateTrends(trend.trendName)}># {trend.trendName}</li>
              ))}  
              </ul>
              </HashtagBox>
        </Timeline>
      </>
    );
  }
  


const UserTitle = styled.div`
img{
  width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      cursor: default;
      margin-right: 20px;
}
h1{
  font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 64px;
color: #FFFFFF;
cursor: default;
}
display: flex;
align-items: center;
margin-block: 5px;
`
const UserPosts = styled.ul`
  margin-top: 10px;
  margin-bottom: 25px;
`;