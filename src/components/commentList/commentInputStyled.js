import styled from "styled-components"

export const CommentInputStyled = styled.div`
 display: flex;
 margin-top: 15px;
 position: relative;
 align-items: center;
 justify-content: center;
 .iimg{width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit:cover;
      
      margin-left: 0px;}
    .input{
        margin-left: 10px;
        height: 40px;
        width: 100%;
background-color: #252525;
border-radius: 8px;
padding-left: 15px;
outline: none;

border:none;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ACACAC;
    }
    .input::placeholder{
        font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.05em;

color: #575757;
    }
    .send{
        color: white; font-size: 18px; 
        cursor: pointer;  
        position: absolute;
        right:15px;;
        z-index:1;
    }
`