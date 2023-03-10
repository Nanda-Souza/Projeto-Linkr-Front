import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import Modal from "react-modal";
import ReactLoading from "react-loading";

export const TrashCan = styled(BsTrash)`
  color: white;
  size: 17px;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalStyled = styled(Modal)`
  box-sizing: border-box;
  position: absolute;
  width: 597px;
  height: 262px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333333;
  border-radius: 50px;
  padding: 50px 50px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  outline: none;

  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    border: none;
    outline: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;

    width: 150px;
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

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const StyledLoading = styled(ReactLoading)`
  height: 150px;
  width: 150px;
`;
