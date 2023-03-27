
import { AiOutlineComment } from "react-icons/ai";
import { CommentStyled } from "./commentStyled";

export default function Comment(props) {
  const { commentCount, getComments } = props;


  return (
    <CommentStyled>
      <div onClick={getComments} data-test="comment-btn" >
      <AiOutlineComment
  style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
/>
      </div>
      <p data-test="comment-counter"
        className="pcomment"
      >
        {Number(commentCount)} comments
      </p>
      
    </CommentStyled>
  );
}
