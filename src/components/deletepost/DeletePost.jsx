import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { AuthContext } from "../../contexts/authContext";
import { deleteAPost } from "../../services/apiPost";
import { TrashCan } from "./deletePostStyled";

export default function DeletePost({ post }) {
  const { post_id } = post;
  const { token } = useContext(AuthContext);

  return <TrashCan />;
}
