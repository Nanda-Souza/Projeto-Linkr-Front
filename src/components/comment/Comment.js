
import { AiOutlineComment } from "react-icons/ai";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import apiPost from "../../services/apiPost";
import { CommentStyled } from "./commentStyled";

export default function Comment(props) {
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
    <CommentStyled>
      <div data-test="comment-btn" onClick={getComments} >
      <AiOutlineComment
  style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
/>
      </div>
      <p data-test="comment-counter"
        className="pcomment"
      >
        {commentNumber} comments
      </p>
      
    </CommentStyled>
  );
}
