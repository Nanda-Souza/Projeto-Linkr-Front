import styled from "styled-components";

export const UserTitle = styled.div`
  .name_and_photo {
    display: flex;
    align-items: center;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: default;
    margin-right: 20px;
  }
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 64px;
    color: #ffffff;
    cursor: default;
  }
  display: flex;
  align-items: center;
  justify-content:space-between;
  width:100%;
  margin-block: 5px;
`;
export const UserPosts = styled.ul`
  margin-bottom: 25px;
`;
