
import { AiOutlineRetweet } from "react-icons/ai";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import apiPost from "../../services/apiPost";
import { RepostStyled } from "./respostStyled";

export default function Repost(props) {
    const { token } = useContext(AuthContext);
    const { post_id, commentCount } = props;
    const [commentNumber, setCommentNumber] = useState(Number(commentCount));
  
    
    
    function thenFunc(res) {
      console.log(res.data)
    }
    function getComments() {
      apiPost
        .getCommentsReq(post_id, token)
        .then(thenFunc)
        .catch((e) => console.log(e));
    }

  

  return (
    <RepostStyled>
      <div onClick={getComments} >
      <AiOutlineRetweet
  style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
/>
      </div>
      <p 
        className="prepost"
      >
        {commentNumber} repost
      </p>
      
    </RepostStyled>
  );
  }
