import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import apiAuth from "../../services/apiAuth";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LinkStyled,
  SignInDiv,
} from "./signInPageStyled";

export default function SignInPage() {
  const { login } = useContext(AuthContext);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!body.email || !body.password) {
      alert("You must fill all the fields!");
      return;
    }

    apiAuth
      .signIn(body)
      .then((res) => {
        login(res.data);
      })
      .catch((err) => {
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
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          name="email"
          value={body.name}
          type="email"
          placeholder="E-mail"
          onChange={editBody}
        />
        <InputStyled
          name="password"
          value={body.password}
          type="password"
          placeholder="Senha"
          onChange={editBody}
        />
        <ButtonStyled>Entrar</ButtonStyled>
      </FormStyled>

      <LinkStyled to="/sign-up">Primeira vez? Cadastre-se!</LinkStyled>
    </SignInDiv>
  );
}
