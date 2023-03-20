import { HeartStyled } from "./heartStyled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import likePostReq from "../../services/apiPost";
import { AuthContext } from "../../contexts/authContext";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function Heart(props) {

  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const { post_id, total_likes, users_liked, has_liked } = props.likeInfo
  const [likesNumber, setLikesNumber] = useState(Number(total_likes))
  const [isLiked, setIsLiked] = useState(has_liked)
  const [heart, setHeart] = useState(<AiOutlineHeart style={{ color: 'white', fontSize: '22px', cursor: 'pointer' }} />)
  useEffect(() => {
    if (isLiked) {
      setHeart(<AiFillHeart style={{ color: '#AC0000', fontSize: '22px', cursor: 'pointer' }} />);
    } else {
      setHeart(<AiOutlineHeart style={{ color: 'white', fontSize: '22px', cursor: 'pointer' }} />);
    }
  }, [isLiked]);
  function thenFunc() {
    isLiked ? setLikesNumber(likesNumber - 1) : setLikesNumber(likesNumber + 1);
    setIsLiked(!isLiked)
  }
  function likePost() {
    likePostReq(isLiked, post_id, token).then(thenFunc).catch((e) => console.log(e));
  }

  const [likedBy, setLikedBy] = useState(users_liked);
  if (isLiked && !likedBy.includes("Você")) {
    setLikedBy(["Você", ...likedBy]);
  }
  if (likedBy.includes(user.name) && !isLiked) {
    setLikedBy(likedBy.filter((name) => name !== user.name));
  }

  const [likesText, setLikesText] = useState('Ninguém curtiu');
  function setText(){
    if (likesNumber > 3) {
      setLikesText(`${likedBy[0]}, ${likedBy[1]} e outras ${likesNumber - 2} pessoas`);
    } else if (likesNumber === 3) {
      setLikesText(`${likedBy[0]}, ${likedBy[1]} e ${likedBy[2]}`)
    } else if (likesNumber === 2) {
      setLikesText(`${likedBy[0]} e ${likedBy[1]}`)
    } else if (likesNumber === 1) {
      setLikesText(`${likedBy[0]}`)
    } else {
      setLikesText("Ninguém curtiu")
    }}
  useEffect(setText, [likesNumber]) // adicionar funçao semelhante com likesNumber de dependencia q adiciona ou remove voce, ve o tamanho do likedBy
  
  return (<HeartStyled>
    <div className="heart-container" onClick={likePost}>
      {heart}
    </div>
    <p data-tooltip-id={post_id} data-tooltip-content={likesText} className="plike">
      {Number(likesNumber)} {Number(likesNumber) <= 1 ? 'like' : 'likes'}
    </p>
    <ReactTooltip className="box" id={post_id} place="bottom" />

  </HeartStyled>)
}



