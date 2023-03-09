import styled from "styled-components";

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
  }
  .profile_picture {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;
