import styled from 'styled-components';
import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    height: 0;
  }
  to {
    max-height: 320px;
  }
`;

export const CommentBoxStyled = styled.div`
width: 611px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  background-color: #1e1e1e;
  animation: ${slideIn} 0.5s forwards;
  z-index:0;
  margin-top:-60px;
  padding-inline: 25px;
  padding-top: 50px;
  padding-bottom: 25px;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }


  @media (max-width: 600px) {
    
    width: 100%;}
`
  
