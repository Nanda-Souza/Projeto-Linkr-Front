import styled from 'styled-components';

export const CommentStyled = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: 80px;
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
  .pcomment {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 3px;
    white-space: nowrap;
    margin-left: auto; 
    margin-right: auto; 
    cursor: default;
    margin-left: -7px;
  }
`;
