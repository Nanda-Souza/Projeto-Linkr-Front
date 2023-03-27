import styled from 'styled-components';
import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    height: 0;
  }
  to {
    max-height: 276px;
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
  justify-content: flex-end;
  overflow-y: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 1em;
  }
`
  
