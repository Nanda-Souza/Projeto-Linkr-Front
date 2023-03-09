import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;


function likePostReq(isLiked, postId, token) {
    if(!isLiked){
    return axios.post(`${BASE_URL}/like`, {postId: Number(postId)}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });}
    else{
        return axios.delete(`${BASE_URL}/like`, {postId: Number(postId)}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    }
  }

//função para dar like no botão:
//no componente do post:
// const {token} = useContext(authContext)
// const {liked, postId} = props
// const [isLiked, setIsLiked] = useState(liked)
// const [heart, setHeart] = useState("<AiOutlineHeart/>")
// useEffect({if(isLiked){setHeart("<AiFillHeart/>")}else{setHeart("<AiOutlineHeart/>")}},[isLiked])
// function likePost(){
// likePostReq(isLiked, postId, token);
// setIsLiked(!isLiked)
//}
//
//Para ver a janelinha do botao de like:
// const [janelaVisivel, setJanelaVisivel] = useState('');
//<button 
//onMouseEnter={() => setJanelaVisivel('componente da janelinha')}
//onMouseLeave={() => setJanelaVisivel('')}
//>
// const texto = ''
// if(totalLikes>3){
//     texto = array[0] + ', ' + array[1] +' e outras ' + totalLikes-2 + ' pessoas curtiram'
// } else if(totalLikes===3){
//     texto = array[0] + ', ' + array[1] +' e outra pessoa curtiu'
// } else if(totalLikes===2){
//     texto =  array[0] +' e ' + array[1] + ' curtiram'
// } else if (totalLikes ===1){
//     texto = array[0] + ' curtiu'
// } else{
//     texto = 'Ninguém curtiu'
// }


export default likePostReq

