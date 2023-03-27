import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
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
  .searchBar {
    display: block;
    width: 40%;
    margin-top: 17px;
    margin-left: 10px;
    input {
      padding-left: 10px;
      width: 100%;
      height: 30px;
      border: none;
      border-radius: 3px;
      outline: none;
      ::placeholder {
        font-family: "Lato";
        font-size: 14px;
        font-weight: 300;
        color: #cecece;
      }
    }
    ul {
      background-color: #e7e7e7;
      width: 100%;
      margin-top: 2px;
      height: auto;
      border-radius: 3px;
      padding: 3px;
      font-family: "Lato";
      font-size: 18px;
      font-weight: 400;
      color: #515151;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
        p {
          font-family: "Lato";
          font-size: 18px;
          font-weight: 400;
          color: #515151;
          margin-top: 15px;
          margin-left: 5px;
        }
        img {
          width: 39px;
          height: 39px;
          left: 454px;
          border-radius: 50%;
        }
        .following {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          color: #c5c5c5;
        }
      }
    }
  }

  .menu {
    width: 20px;
    height: 15px;
    transform: ${(props) =>
      props.showOptions ? "rotate(180deg)" : "rotate(0deg)"};
  }
  .profile_picture {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  width: 150px;
  height: 43px;
  background: #171717;
  border-radius: 0px 0px 20px 20px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export const OptionsContainer = styled.div`
  display: ${(props) => (props.showOptions ? "block" : "none")};
  position: fixed;
  right: 0;
  top: 72px;
  width: 150px;
`;
