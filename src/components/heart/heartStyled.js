import styled from 'styled-components';

export const HeartStyled = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: 10px;
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
  .plike {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 5px;
    white-space: nowrap;
    margin-left: auto; 
    margin-right: auto; 
    margin-top: 10px; 
    cursor: default;
  }
  .box{
    background: rgba(255, 255, 255, 0.9);
border-radius: 3px;
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 13px;
color: #505050;
  }
`;
