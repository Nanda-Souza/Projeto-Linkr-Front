import Commentary from "./Commentary"
import { CommentBoxStyled } from "./commentBoxStyled"
import CommentInput from "./CommentInput"
import { useEffect } from "react"

export default function CommentBox(props) {
    const {comments, setCommentNumber, post_id, setComments, commentNumber} = props

    useEffect(() => {
      const element = document.getElementById("comment-box");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    }, [comments]);

    return(
      <CommentBoxStyled data-test="comment-box" id="comment-box">
        {comments.map((i) => <Commentary key={i.comment} status={i.status} img_url={i.img_url} name={i.name} comment={i.comment}/>)}
        <CommentInput commentNumber={commentNumber} setCommentNumber={setCommentNumber} setComments={setComments} post_id={post_id}/>
      </CommentBoxStyled>
    );
}
