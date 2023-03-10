import { HeartStyled } from "./heartStyled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import likePostReq from "../../services/apiPost";
import { AuthContext } from "../../contexts/authContext";
export default function Heart(props){
    //passar infos que vão vir da requisição da timeline como props
    const { user } = useContext(AuthContext); 
    const {token} = useContext(AuthContext);
    const {likeInfo} = props //precisa so passar o likeInfo que vai vir junto coms as infos do post, aqui eu to recebendo
    const {post_id, total_likes, users_liked, has_liked} = likeInfo //aqui desestruturei a likeInfo
    const [likesNumber, setLikesNumber] = useState(total_likes) //numero de likes do post q vai aparecer pro usuario
    const [isLiked, setIsLiked] = useState(has_liked) //booleando q vai dizer se o usuario curtiu o post
    const [heart, setHeart] = useState(<AiOutlineHeart style={{ color: 'white' }}/>) //conteudo dentro do botao de like. Vai mudar o icone e cor se tiver curtido pelo usuario ou nao
    useEffect(isLiked ? setHeart(<AiFillHeart style={{ color: 'red' }}/>) : setHeart(<AiOutlineHeart style={{ color: 'white' }}/>),[isLiked]) // essa funcao deve mudar o react-icon quando isLiked mudar
    function likePost(){
    likePostReq(isLiked, post_id, token);
    isLiked ? setLikesNumber(likesNumber-1) : setLikesNumber(likesNumber+1);
    setIsLiked(!isLiked)
}// essa funcao vai fazer a requisição pra dar like no post. Vai alterar o numero de likes do post (likesNumber) e vai alternar o estado do isLiked
    return (<HeartStyled> //heartStyled.js é a div q vai conter o botao
    <button onClick={likePost}>{heart}</button> // esse é o botao do coracao, heart é o icone, likePost é a função
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
//   likesText = `${likedBy[0]}, ${likedBy[1]} e outras ${total_likes - 2} curtiram`;
// } else if (total_likes === 3) {
//   likesText = `${likedBy[0]}, ${likedBy[1]} e ${likedBy[2]} curtiram`;
// } else if (total_likes === 2) {
//   likesText = `${likedBy[0]} e ${likedBy[1]} curtiram`;
// } else if (total_likes === 1) {
//   likesText = `${likedBy[0]} curtiu`;
// } else {
//   likesText = "Ninguém curtiu";
// } // essas condicionais vao alterar o texto que aparece baseado no numero de likes do post

// <p>{likesText}</p> usar essa tag aqui em baixo do coração
// 