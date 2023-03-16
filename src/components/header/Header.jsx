import { useContext, useEffect, useRef, useState } from "react";
import {
  HeaderContainer,
  HeaderDiv,
  LogoutButton,
  OptionsContainer,
  SearchBar,
} from "./headerStyled";
import logo from "../../assets/linkr.png";
import menu_vector from "../../assets/Vector (2).png";
import { AuthContext } from "../../contexts/authContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [showOptions, setShowOptions] = useState(false);
  const logoutButtonRef = useRef();

  const handleclick = (event) => {
    event.stopPropagation();
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        logoutButtonRef.current &&
        !logoutButtonRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderDiv showOptions={showOptions}>
        <img src={logo} alt="logo" />
        <SearchBar type="search" placeholder="Search for people"/>
        <div>
          <img
            onClick={handleclick}
            src={menu_vector}
            alt="menu"
            className="menu"
          />
          <img
            data-test="avatar"
            onClick={handleclick}
            src={user.img_url}
            alt="profile_picture"
            className="profile_picture"
          />
        </div>
      </HeaderDiv>
      <OptionsContainer data-test="menu" showOptions={showOptions}>
        <LogoutButton
          data-test="logout"
          ref={logoutButtonRef}
          className="logoutButton"
          onClick={logout}
          disabled={showOptions ? false : true}
        >
          Logout
        </LogoutButton>
      </OptionsContainer>
    </HeaderContainer>
  );
}
