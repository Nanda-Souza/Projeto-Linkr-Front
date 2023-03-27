import { CommentStyled } from "./commentaryStyled"
export default function Commentary(props) {
    const {img_url, name, comment, status} = props
    return(<CommentStyled data-test="comment">
    <img className="cimg" src={img_url}/><div><p className="cname">{name} <span className="status">alo</span></p><p className="ccontent">{comment}</p></div>
    </CommentStyled>)
}