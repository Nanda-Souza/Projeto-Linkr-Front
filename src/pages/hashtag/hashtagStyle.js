import styled from "styled-components";

export const Timeline = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
  p{
    weight: 700;
    font-size: 41px;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
    margin-left: 15px;
  }
  @media (max-width: 600px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const PostsList = styled.ul`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Post = styled.li`
  margin-bottom: 20px;
  margin-top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 611px;
  height: 276px;
  background-color: #171717;
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
  background-color: blue;
  justify-content: space-between;
  .link_img {
    margin-top: 0;
    width: 153px;
    height: 156px;
    border-radius: 0px 10px 10px 0px;
  }
  .link_details {
    display: block;
    font-family: "Lato";
    font-style: normal;
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
