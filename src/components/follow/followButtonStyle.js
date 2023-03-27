import styled from "styled-components";

export const ButtonFollow = styled.button`
background-color: ${(props) => props.disabled ? "#A4ABAB" : "#1877F2"};
width: 112px;
height: 31px;
border-radius: 5px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
color: #FFFFFF;
border:none;
margin-right: 0px;
`

export const ButtonUnfollow = styled.button`
background-color: #FFFFFF;
width: 112px;
height: 31px;
border-radius: 5px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
color: #1877F2;
border:none;
margin-right: 0px;
`