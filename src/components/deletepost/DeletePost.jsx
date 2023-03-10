import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { AuthContext } from "../../contexts/authContext";
import { deleteAPost } from "../../services/apiPost";
import { TrashCan } from "./deletePostStyled";

export default function DeletePost({ post_id }) {
  const { token } = useContext(AuthContext);

  function deletePost() {
    console.log(post_id);
    deleteAPost(post_id, token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <TrashCan onClick={deletePost} />;
}
