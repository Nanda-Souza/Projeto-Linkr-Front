import styled from "styled-components";

export const ButtonFollow = styled.button`
background-color: ${(props) => (props.follow === "Follow" ? "#1877F2" : "#FFFFFF")};
width: 112px;
height: 31px;
border-radius: 5px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
color: ${(props) => (props.follow === "Follow" ? "#FFFFFF" : "#1877F2")};
border:none;
margin-right: 0px;
`