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
  flex-direction: column; /* adicionado */
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
    margin-left: auto; /* adicionado */
    margin-right: auto; /* adicionado */
    margin-top: 10px; /* adicionado */
  }
`;
