import { CommentInputStyled } from "./commentInputStyled"
import { BsSend } from "react-icons/bs";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
export default function CommentInput(props) {
    const [message, setMessage] = useContext('')
    const { sendComment } = props
    const { user } = useContext(AuthContext);
    return(<CommentInputStyled>
    <img className="iimg" src={user.img_url}/> <input value={message} onChange={(e) => setMessage(e.target.value)} className='input' placeholder="write a comment..."/> <BsSend className="send"/>
    </CommentInputStyled>)
}