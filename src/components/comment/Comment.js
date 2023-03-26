
import { AiOutlineComment } from "react-icons/ai";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { CommentStyled } from "./commentStyled";

export default function Comment(props) {
  const { commentCount } = props;


  return (
    <CommentStyled>
      <div data-test="comment-btn" >
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
