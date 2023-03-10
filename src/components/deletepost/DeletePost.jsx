import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { apiPost } from "../../services/apiPost";
import {
  Buttons,
  LoadingContainer,
  ModalStyled,
  StyledLoading,
  TrashCan,
} from "./deletePostStyled";

export default function DeletePost({ post_id, getPosts }) {
  const { token } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function deletePost() {
    setIsLoading(true);
    apiPost
      .deleteAPost(post_id, token)
      .then((res) => {
        toggleModal();
        setIsLoading(false);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toggleModal();
        alert("It was not possible to delete the post");
      });
  }

  return (
    <>
      <TrashCan data-test="delete-btn" onClick={toggleModal} />
      <ModalStyled
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Modal"
      >
        <h2>Are you sure you want to delete this post?</h2>
        <Buttons>
          <button data-test="cancel" className="cancel" onClick={toggleModal}>
            No, go back!
          </button>
          <button data-test="confirm" className="confirm" onClick={deletePost}>
            Delete
          </button>
        </Buttons>
      </ModalStyled>

      {isLoading && (
        <LoadingContainer>
          <StyledLoading type={"spin"} color={"#1599aa"} />
        </LoadingContainer>
      )}
    </>
  );
}
