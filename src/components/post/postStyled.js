import styled from "styled-components";

export const PostStyled = styled.li`
position: relative;
  margin-bottom: 20px;
  margin-top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 611px;
  height: 276px;
  background-color: #171717;
  .header_post {
    display: flex;
    justify-content: space-between;
  }
  .info {
    display: flex;
    align-items: center;
    .profile_picture_post {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-top: 10px;
    }
    p {
      margin-top: 10px;
      margin-left: 10px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #ffffff;
    }
  }
  .description_post {
    margin-top: 10px;
    margin-left: 65px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    color: #ffffff;
  }
  .edit_comment {
    margin-left: 65px;
    height: 30px;
    width:65%;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    border: none;
    border-radius:5px;
    outline:none;
  }
  .buttons {
    margin-top: 10px;
    margin-right: 30px;
  }
  @media (max-width: 600px) {
    border-radius: 0px;
    width: 100%;
    .info {
      margin: 0;
      justify-content: flex-start;
    }
  }
`;

export const LinkPost = styled.div`
  border: 1px solid #4d4d4d;
  border-radius: 14px;
  width: 503px;
  height: 155px;
  margin-top: 15px;
  margin-left: 65px;
  display: flex;
  justify-content: space-between;
  .link_img {
    margin-top: 0;
    width: 153px;
    height: 156px;
    border-radius: 0px 10px 10px 0px;
    object-fit: cover;
  }
  .link_details {
    height:120px;
    margin-left:10px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:flex-start;
    font-family: "Lato";
    text-align:justify;
    font-weight: 400;
    color: #cecece;
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 13px;
    }
    h3 {
      font-size: 11px;
    }
  }
  @media (max-width: 600px) {
    border-radius: 14px;
    width: 80%;
    .link_details {
      width: 80%;
    }
  }
`;
