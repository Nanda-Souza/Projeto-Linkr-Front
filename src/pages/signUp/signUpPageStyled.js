import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  background-color: #333333;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: passion one;
  font-style: normal;
  font-weight: 700;
  font-size: 76px;
  color: #fff;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  p {
    font-size: 23px;
    line-height: 34px;
  }

  @media screen and (max-width: 600px) {
    display: block;
    flex-direction: row;
    height: 175px;
  }
`;

export const InputStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: oswald, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  align-self: center;
  justify-self: center;
  color: #000;
  width: 80%;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 13px;
  padding: 15px;
  border: none;
  border-radius: 6px;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};

  &::placeholder {
    font-family: oswald;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #9f9f9f;
  }
`;

export const ButtonStyled = styled.button`
  width: 85%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "grey" : "#1877F2")};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  margin-top: 5px;
  &:hover {
    background: #e8ebef;
  }
  &:focus {
    outline: none;
  }
  font-family: oswald;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #fff;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  font-family: lato;
  font-style: normal;
  font-weight: 400;
  color: #fff;
`;
