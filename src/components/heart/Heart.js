import { HeartStyled } from "./heartStyled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import apiPost from "../../services/apiPost";

export default function Heart(props) {
  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const { post_id, total_likes, users_liked, has_liked } = props.likeInfo;
  const [likesNumber, setLikesNumber] = useState(Number(total_likes));
  const [isLiked, setIsLiked] = useState(has_liked);
  const [heart, setHeart] = useState(
    <AiOutlineHeart
      style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
    />
  );
  useEffect(() => {
    if (isLiked) {
      setHeart(
        <AiFillHeart
          style={{ color: "#AC0000", fontSize: "22px", cursor: "pointer" }}
        />
      );
    } else {
      setHeart(
        <AiOutlineHeart
          style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
        />
      );
    }
  }, [isLiked]);
  function thenFunc() {
    isLiked ? setLikesNumber(likesNumber - 1) : setLikesNumber(likesNumber + 1);
    setIsLiked(!isLiked);
  }
  function likePost() {
    apiPost
      .likePostReq(isLiked, post_id, token)
      .then(thenFunc)
      .catch((e) => console.log(e));
  }

  const [likedBy, setLikedBy] = useState(
    users_liked.filter((u) => u !== user.name)
  );

  useEffect(() => {
    let newLikedBy = [...likedBy];

    if (isLiked && !likedBy.includes("Você")) {
      newLikedBy.unshift("Você");
    } else if (!isLiked && likedBy.includes("Você")) {
      newLikedBy = likedBy.filter((name) => name !== "Você");
    }

    setLikedBy(newLikedBy);
  }, [isLiked]);

  const [likesText, setLikesText] = useState("Ninguém curtiu");

  useEffect(() => {
    if (likedBy.length > 0) {
      if (likedBy.length === 1) {
        setLikesText(likedBy[0]);
      } else if (likedBy.length === 2) {
        setLikesText(`${likedBy[0]} e ${likedBy[1]}`);
      } else {
        setLikesText(
          `${likedBy[0]}, ${likedBy[1]} e outras ${likedBy.length - 2} pessoas`
        );
      }
    } else {
      setLikesText("Ninguém curtiu");
    }
  }, [likedBy]);

  return (
    <HeartStyled>
      <div className="heart-container" onClick={likePost} data-test="like-btn">
        {heart}
      </div>
      <p
        data-tooltip-id={post_id}
        data-tooltip-content={likesText}
        className="plike"
        data-test="counter"
      >
        {Number(likesNumber)} {Number(likesNumber) <= 1 ? "like" : "likes"}
      </p>
      <ReactTooltip
        className="box"
        id={post_id}
        place="bottom"
        data-test="tooltip"
      />
    </HeartStyled>
  );
}
