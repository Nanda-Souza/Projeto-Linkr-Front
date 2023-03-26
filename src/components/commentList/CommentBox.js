import Commentary from "./Commentary"
import { CommentBoxStyled } from "./commentBoxStyled"

export default function CommentBox(props) {
    const {comments, setCommentNumber} = props

    return(<CommentBoxStyled>
    {comments.map((i) => <Commentary img_url={i.img_url} name={i.name} comment={i.comment}/>)}
    </CommentBoxStyled>)
}