import { CommentInputStyled } from "./commentInputStyled"
import { BsSend } from "react-icons/bs";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import apiPost from "../../services/apiPost";
import { useState } from "react";
export default function CommentInput(props) {
    const { token } = useContext(AuthContext);
    const [message, setMessage] = useState('')
    const {  post_id, setComments, setCommentNumber, commentNumber } = props
    const { user } = useContext(AuthContext);

    function thenFunc2(res) {
        setComments(res.data)
        setCommentNumber(commentNumber+1)
      }

    function thenFunc(res) {
        setMessage('')
        apiPost
          .getCommentsReq(post_id, token)
          .then(thenFunc2)
          .catch((e) => console.log(e));
      }
      function postComment() {
        apiPost
          .postCommentReq(message, post_id, token)
          .then(thenFunc)
          .catch((e) => console.log(e));
      }

    
    return(<CommentInputStyled>
    <img className="iimg" src={user.img_url}/> <input data-test="comment-input" value={message} onChange={(e) => setMessage(e.target.value)} className='input' placeholder="write a comment..."/> <BsSend data-test="comment-submit" onClick={postComment} className="send"/>
    </CommentInputStyled>)
}