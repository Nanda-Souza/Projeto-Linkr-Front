import { useContext, useEffect, useRef, useState } from "react";
import { HeaderContainer, HeaderDiv, LogoutButton } from "./headerStyled";
import logo from "../../assets/linkr.png";
import menu_vector from "../../assets/Vector (2).png";
import { AuthContext } from "../../contexts/authContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const logoutButtonRef = useRef();

  const handleclick = (event) => {
    event.stopPropagation();
    setShowLogout(!showLogout);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        logoutButtonRef.current &&
        !logoutButtonRef.current.contains(event.target)
      ) {
        setShowLogout(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderDiv showLogout={showLogout}>
        <img src={logo} alt="logo" />
        <div>
          <img
            onClick={handleclick}
            src={menu_vector}
            alt="menu"
            className="menu"
          />
          <img
            onClick={handleclick}
            src={user.img_url}
            alt="profile_picture"
            className="profile_picture"
          />
        </div>
      </HeaderDiv>
      <LogoutButton
        ref={logoutButtonRef}
        className="logoutButton"
        onClick={logout}
        showLogout={showLogout}
      >
        Logout
      </LogoutButton>
    </HeaderContainer>
  );
}
