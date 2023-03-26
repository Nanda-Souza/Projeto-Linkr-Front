
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
    const { post_id, shareCount } = props;
    const [shareNumber, setShareNumber] = useState(Number(shareCount));
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    
    
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    function sharePost() {
      setIsLoading(true);
      //apiPost
        //.deleteAPost(post_id, token)
        //.then((res) => {
          toggleModal();
          setIsLoading(false);
          //getPosts();
        //})
        //.catch((err) => {
          //console.log(err);
          //setIsLoading(false);
          //toggleModal();
          //alert("It was not possible to delete the post");
        //});
    }
  

  return (
    <>
    <RepostStyled>
      <div onClick={toggleModal} >
      <AiOutlineRetweet
  style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
/>
      </div>
      <p 
        className="prepost"
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
          <button data-test="confirm" className="confirm" onClick={toggleModal}>
            Yes,share!
          </button>
        </Buttons>
      </ModalStyled>
    </>
  );
  }
