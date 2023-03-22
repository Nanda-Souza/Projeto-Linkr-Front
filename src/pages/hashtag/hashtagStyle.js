import styled from "styled-components";

export const Timeline = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
.hashtag_name{
    font-size: 41px;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
    margin-left: 15px;
  }
  p{
    font-weight: 700;
    font-size: 27px;
    color: #FFFFFF;
    font-family: 'Oswald';
    margin-left: 15px;
  }
  @media (max-width: 600px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const Message = styled.div`
  margin-top: 80px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  color: #ffffff;
`;

export const PostsList = styled.ul`
  margin-top: 25px;
  margin-bottom: 25px;
`;

