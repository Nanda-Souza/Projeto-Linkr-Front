import { HeartStyled } from "./heartStyled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import likePostReq from "../../services/apiPost";
import { AuthContext } from "../../contexts/authContext";
export default function Heart(props){
    
    const { user } = useContext(AuthContext); 
    const {token} = useContext(AuthContext);
    const {post_id, total_likes, users_liked, has_liked} = props.likeInfo 
    const [likesNumber, setLikesNumber] = useState(total_likes) 
    const [isLiked, setIsLiked] = useState(has_liked) 
    const [heart, setHeart] = useState(<AiOutlineHeart style={{ color: 'white', fontSize: '22px', cursor: 'pointer'  }}/>) 
    useEffect(() => {
        if (isLiked) {
          setHeart(<AiFillHeart style={{ color: '#AC0000', fontSize: '22px', cursor: 'pointer'  }} />);
        } else {
          setHeart(<AiOutlineHeart style={{ color: 'white', fontSize: '22px' , cursor: 'pointer' }} />);
        }
      }, [isLiked]);
    function thenFunc(){
        isLiked ? setLikesNumber(likesNumber-1) : setLikesNumber(likesNumber+1);
    setIsLiked(!isLiked)
    }
    function likePost(){
    likePostReq(isLiked, post_id, token).then(thenFunc).catch((e) => console.log(e));
}
    return (<HeartStyled>
        <div className="heart-container" onClick={likePost}>
          {heart}
        </div>
        <p className="plike">
  {Number(likesNumber)} {Number(likesNumber) <= 1 ? 'like' : 'likes'}
</p>

      </HeartStyled>)
}

//seguinte codigo é pra configurar a janela q aparece qnd passa o mouse em cima. Recomendaram a biblioteca tooltips

// const [janelaVisivel, setJanelaVisivel] = useState('');
//<button 
//onMouseEnter={() => setJanelaVisivel('componente da janelinha')}
//onMouseLeave={() => setJanelaVisivel('')}



//o seguinte código é pra alterar o texto que aparece na janelinha:

// const [likedBy, setLikedBy] = useState(users_liked); // esse vai ser o array de nomes a aparecer
// if (has_liked && !likedBy.includes("Você")) {
//   setLikedBy(["Você", ...likedBy]);
// }
// if (likedBy.includes(user.name) && !has_liked) {
//   setLikedBy(likedBy.filter((name) => name !== user.name));
// } // essas condicionais vao colocar uma string "Você" no array caso o usuario tenha curtido o post

// let likesText;
// if (total_likes > 3) {
//   likesText = `${likedBy[0]}, ${likedBy[1]} e outras ${total_likes - 2} pessoas`;
// } else if (total_likes === 3) {
//   likesText = `${likedBy[0]}, ${likedBy[1]} e ${likedBy[2]}`;
// } else if (total_likes === 2) {
//   likesText = `${likedBy[0]} e ${likedBy[1]}`;
// } else if (total_likes === 1) {
//   likesText = `${likedBy[0]}`;
// } else {
//   likesText = "Ninguém curtiu";
// } // essas condicionais vao alterar o texto que aparece baseado no numero de likes do post

// <p>{likesText}</p> usar essa tag aqui em baixo do coração
// 