import { useContext } from "react";
import { HeaderContainer, HeaderDiv, LogoutButton } from "./headerStyled";
import logo from "../../assets/linkr.png";
import menu_vector from "../../assets/Vector (2).png";
import { AuthContext } from "../../contexts/authContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <HeaderDiv>
        <img src={logo} alt="logo" />
        <div>
          <img src={menu_vector} alt="menu" className="menu" />
          <img
            src={user.img_url}
            alt="profile_picture"
            className="profile_picture"
          />
        </div>
      </HeaderDiv>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </HeaderContainer>
  );
}
