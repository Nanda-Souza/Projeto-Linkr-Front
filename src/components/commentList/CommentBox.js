import Commentary from "./Commentary"
import { CommentBoxStyled } from "./commentBoxStyled"
import CommentInput from "./CommentInput"

export default function CommentBox(props) {
    const {comments, setCommentNumber} = props

    return(<CommentBoxStyled>
    {comments.map((i) => <Commentary key={i.comment} img_url={i.img_url} name={i.name} comment={i.comment}/>)}
    <CommentInput/>
    </CommentBoxStyled>)
}