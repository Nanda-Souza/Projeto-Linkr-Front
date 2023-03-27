
import { AiOutlineRetweet } from "react-icons/ai";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import apiPost from "../../services/apiPost";
import { 
  RepostStyled,
  Buttons,
  ModalStyled
 } from "./respostStyled";


export default function Repost(props) {
    const { token } = useContext(AuthContext);    
    const { post_id,
            post_url,
            post_description, 
            shareCount,
            is_repost,
            original_post_id,
            getPosts } = props;
    const [shareNumber, setShareNumber] = useState(Number(shareCount));
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    
    
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    function sharePost() {
      setIsLoading(true);
      apiPost
        .createPost(token, post_id, post_url, post_description, original_post_id)
        .then((res) => {
          toggleModal();
          setIsLoading(false);
          getPosts();
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          toggleModal();
          alert("It was not possible to repost");
        });
    }
  

  return (
    <>
    <RepostStyled>
      <div onClick={toggleModal} data-test="repost-btn">
      <AiOutlineRetweet
  style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
/>
      </div>
      <p 
        className="prepost"
        data-test="repost-counter" 
      >
        {shareNumber} repost
      </p>
      
    </RepostStyled>
    <ModalStyled
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Modal"
      >
        <h2>Do you want to repost this link?</h2>
        <Buttons>
          <button data-test="cancel" className="cancel" onClick={toggleModal}>
            No, cancel!
          </button>
          <button data-test="confirm" className="confirm" onClick={sharePost}>
            Yes,share!
          </button>
        </Buttons>
      </ModalStyled>
    </>
  );
  }
