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
    transform: ${(props) =>
      props.showOptions ? "rotate(180deg)" : "rotate(0deg)"};
  }
  .profile_picture {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
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
