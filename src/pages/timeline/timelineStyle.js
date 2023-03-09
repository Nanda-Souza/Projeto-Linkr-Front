import styled from "styled-components";

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
  @media (max-width: 600px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const Message = styled.div`
  margin-top: 80px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  color: #ffffff;
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
    .profile_picture {
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
  @media (max-width: 600px) {
    border-radius: 0px;
    width: 100%;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin-bottom: 5px;
      }
    }

    .profile_picture {
      display: none;
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
  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    input {
      margin: 0;
      width: 95%;
    }
    button {
      margin-left: 67%;
    }
  }
`;

export const PostsList = styled.ul`
  margin-top: 50px;
  margin-bottom: 25px;
`;
