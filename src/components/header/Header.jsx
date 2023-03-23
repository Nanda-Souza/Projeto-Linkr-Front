import { useContext, useEffect, useRef, useState } from "react";
import {
  HeaderContainer,
  HeaderDiv,
  LogoutButton,
  OptionsContainer,
} from "./headerStyled";
import logo from "../../assets/linkr.png";
import menu_vector from "../../assets/Vector (2).png";
import { AuthContext } from "../../contexts/authContext";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, logout, token } = useContext(AuthContext);
  const [showOptions, setShowOptions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [result, setResult] = useState([]);
  const logoutButtonRef = useRef();
  const navigate = useNavigate();

  function getUser(e) {
    setIsSearching(true);

    const search = e.target.value;

    if (search === "") {
      setIsSearching(false);
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(
      `${process.env.REACT_APP_API_URL}/users?search=${search}`,
      config
    );
    promise.then((res) => {
      setResult(res.data);
    });
    promise.catch((error) => {
      console.log(error.message);
      setIsSearching(false);
    });
  }


  function navigateToUserPage(id){
    navigate(`/user/${id}`)
    setIsSearching(false)  
  }

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
        <Link to="/timeline">
          <img src={logo} alt="logo" />
        </Link>
        <div className="searchBar">
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            placeholder="Search for people"
            value={searchName}
            onChange={(e) => getUser(e)}
            data-test="search"
          />
          {isSearching ? (
            <ul>
              {result?.length ? (
                result.map((result) => (
                  <li
                    onClick={() => navigateToUserPage(result.id)}
                    key={result.id}
                    data-test="user-search"
                  >
                    <img src={result.img_url} />
                    <p>{result.name}</p>
                  </li>
                ))
              ) : (
                <p>No results</p>
              )}
            </ul>
          ) : null}
        </div>
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
            src={user?.img_url || "https://i.imgur.com/6VBx3io.png"}
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
