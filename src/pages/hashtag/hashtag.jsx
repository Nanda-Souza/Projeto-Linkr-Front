import {
    Timeline,
    PostsList,    
    Message
  } from "./hashtagStyle";  
  import Header from "../../components/header/Header";
  import { HashtagBox } from "../../components/hashtag";
  import logo from "../../assets/linkr.png";
  import menu_vector from "../../assets/Vector (2).png";
  import profile from "../../assets/image 3.png";  
  import Post from "../../components/post/Post";
  import { useState, useEffect, useContext } from "react";
  import { useNavigate, useParams } from "react-router";
  import { AuthContext } from "../../contexts/authContext";
  import axios from "axios";
  
  export default function HashtagPage() {
      const navigate = useNavigate();
      const { hashtag } = useParams();
      const { token } = useContext(AuthContext);      
      const [trends, setTrends] = useState(undefined);
      const [postTrends, setPostTrends] = useState([]);      
      const [loadingApi, setLoadingApi] = useState(true);
      

      function navigateTrends(hashtag){
        navigate(`/hashtag/${hashtag}`)
          
      }

      function getPostsTrends() {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const url = `${process.env.REACT_APP_API_URL}/list-trends`;        
        
        const body = {trendName:hashtag};
        
        const promise = axios.post(
          url,
          body,
          config);

        promise.then((res) => {
          setLoadingApi(false);
          setPostTrends(res.data);
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
  
      useEffect(() => {
        console.log("called");
        getPostsTrends();
        getTrends();        
        }, [hashtag]);  
        
  
  
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
          <p>#{hashtag}</p>
          
            
          {loadingApi ? (
            <Message>Loading...</Message>
          ) : postTrends.length === 0 ? (
            <Message>There are no posts yet</Message>
          ) : (
            <PostsList>
              {postTrends.map((post) => {
                return (
                  <Post
                    key={post.post_id}
                    post={post}
                    getPosts={getPostsTrends}
                  ></Post>
                );
              })}
            </PostsList>
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