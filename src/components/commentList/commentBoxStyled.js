import styled from 'styled-components';
import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    height: 0;
  }
  to {
    height: max(276px);
  }
`;

export const CommentBoxStyled = styled.div`
width: 611px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  background-color: #1e1e1e;
  animation: ${slideIn} 0.5s forwards;
  z-index:0;
`