import styled from "styled-components";

export const HashtagBox = styled.div`
width: 301px;
height: 406px;
background-color: #171717;
border-radius: 16px;
padding: 16px 0;
position: fixed;
margin-left:635px;
margin-top: 90px;
h1{
    font-weight: 700;
    font-size: 27px;
    color: #FFFFFF;
    font-family: 'Oswald';
    margin-left: 15px;
    margin-bottom: 20px;
}
.linha {
    width: 302px;
    background-color: #484848;
    margin-top:20px;
    margin-bottom:20px;
    height: 1px;
}
li{
    font-weight: 700;
    font-size: 19px;
    color:  #FFFFFF;
    font-family: 'Lato';
    margin-bottom: 15px;
    margin-left: 15px;
    cursor: pointer;
}
@media screen and (max-width: 937px) {
    display: none;
}
`;