import styled from "styled-components"

export const CommentStyled = styled.div`
display:flex;
border-bottom: 1px solid #353535;
margin-top: 5px;
height: 60px;
.status{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
margin-left: 5px;
color: #565656;
}
.cimg{
    width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit:cover;
      margin-block: 10px;
      margin-left: 0px;
      margin-right:5px;
}
.cname{
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #F3F3F3;
margin-top: 6px;
margin-bottom: 5px;
margin-left: 8px;
}
.ccontent{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ACACAC;
margin-left: 8px;
}
`