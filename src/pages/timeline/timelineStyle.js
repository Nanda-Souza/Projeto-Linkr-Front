import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  img {
    margin-top: 17px;
    margin-left: 20px;
    width: 100px;
    height: 30px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .menu {
    width: 20px;
    height: 15px;
  }
  .profile_picture {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;
export const Timeline = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
  img {
    width: 110px;
    height: 30px;
    margin-left: 15px;
  }
`;

export const BoxCreatePost = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 50px;
  width: 600px;
  height: 210px;
  background-color: #ffffff;
  div {
    display: flex;
    align-items: center;
    img {
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
      font-weight: 300;
      font-size: 20px;
      color: #707070;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 503px;
    background: #efefef;
    border-radius: 5px;
    border: none;
    margin-left: 60px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
  }
  .url {
    height: 30px;
  }
  .description {
    margin-top: 10px;
    height: 70px;
  }
  button {
    margin-top: 10px;
    margin-left: 458px;
    width: 110px;
    height: 30px;
    background: #1877f2;
    border-radius: 5px;
    border: none;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const PostsList = styled.ul`
  margin-top: 50px;
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
  div {
    display: flex;
    align-items: center;
    img {
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
  }
  .link_details {
    display: flex;
    flex-direction: column;
  }
`;
