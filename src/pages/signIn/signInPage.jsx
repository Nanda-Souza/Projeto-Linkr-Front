import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import apiAuth from "../../services/apiAuth";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LinkStyled,
  SignInDiv,
  Title,
} from "./signInPageStyled";

export default function SignInPage() {
  const { login, setUser, setToken } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const recoveredToken = localStorage.getItem("tokenUser");

    if (recoveredUser && recoveredToken) {
      setUser(JSON.parse(recoveredUser));
      setToken(JSON.parse(recoveredToken));
      login({ token: JSON.parse(recoveredToken) });
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!body.email || !body.password) {
      alert("You must fill all the fields!");
      return;
    }

    setDisabled(true);

    apiAuth
      .signIn(body)
      .then((res) => {
        console.log(res);
        login(res.data);
      })
      .catch((err) => {
        setDisabled(false);
        if (err.response.status === 401) {
          alert("Invalid credentials");
        }
      });
  }

  function editBody(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  return (
    <SignInDiv>
      <Title>
        linkr
        <p>
          save, share and discover
          <br />
          the best links on the web
        </p>
      </Title>

      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          data-test="email"
          disabled={disabled}
          name="email"
          value={body.name}
          type="email"
          placeholder="E-mail"
          onChange={editBody}
        />
        <InputStyled
          data-test="password"
          disabled={disabled}
          name="password"
          value={body.password}
          type="password"
          placeholder="Senha"
          onChange={editBody}
        />
        <ButtonStyled data-test="login-btn" disabled={disabled}>
          Sign-in
        </ButtonStyled>
        <LinkStyled data-test="sign-up-link" to="/sign-up">
          First time? Create an account!
        </LinkStyled>
      </FormStyled>
    </SignInDiv>
  );
}
