import { CommentaryStyled } from "./commentBoxStyled"
export default function Commentary(props) {
    const {img_url, name, comment} = props
    return(<CommentaryStyled>
    <img className="cimg" src={img_url}/><div><p className="cname">{name}</p><p className="ccontent">{comment}</p></div>
    </CommentaryStyled>)
}