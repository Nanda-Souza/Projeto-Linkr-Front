import styled from 'styled-components';
import Modal from "react-modal";

export const RepostStyled = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: 140px;
  justify-content: center;
  align-items: center;
  width: 30px;
  z-index: 3;
  padding: 0;
  display: flex;
  flex-direction: column; 
  text-align: center;
  div {
    margin: 0;
  }
  .prepost {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 8px;
    white-space: nowrap;
    margin-left: auto; 
    margin-right: auto; 
    cursor: default;
    margin-left: -7px;
  }
`;


export const ModalStyled = styled(Modal)`
  box-sizing: border-box;
  position: absolute;
  width: 597px;
  height: 210px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333333;
  border-radius: 20px;
  padding: 50px 50px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  outline: none;

  h2 {
    width: 299px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 29px;
    line-height: 36px;
    margin-left:110px;
    text-align: center;
    color: #ffffff;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  button {
    border: none;
    outline: none;
    padding: 10px 20px;
    margin-top: 10px;
    margin-left:20px;
    cursor: pointer;

    width: 134px;
    height: 37px;
    background: #1877f2;
    border-radius: 5px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    /* cancel button */

    &.cancel {
      background: #ffffff;
      color: #1877f2;
    }

    &.confirm {
      background: #1877f2;
      color: #ffffff;
    }
  }
`;
