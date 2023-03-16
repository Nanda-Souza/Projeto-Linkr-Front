import {
    Timeline,
    PostsList,
    Post,
    LinkPost,
  } from "./hashtagStyle";
  
  import Header from "../../components/header/Header";
  import { HashtagBox } from "../../components/hashtag";
  import logo from "../../assets/linkr.png";
  import menu_vector from "../../assets/Vector (2).png";
  import profile from "../../assets/image 3.png";  
  import img_link from "../../assets/image 4.png"
  import { useState, useEffect, useContext } from "react";
  import { useNavigate, useParams } from "react-router";
  import { AuthContext } from "../../contexts/authContext";
  import axios from "axios";
  
  export default function HashtagPage() {
      const navigate = useNavigate();
      const { hashtag } = useParams();
      const { token } = useContext(AuthContext);      
      const [trends, setTrends] = useState(undefined)  ;
      

      function navigateTrends(hashtag){
        navigate(`/hashtag/${hashtag}`)    
      }
  
      useEffect(() => {
          const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/top-trending`;        
          const promise = axios.get(URL, config);
          promise.then((res) => setTrends(res.data));          
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
          <p>#{hashtag}</p>
          
            
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