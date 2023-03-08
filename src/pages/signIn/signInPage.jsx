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

  const handleSubmit = (e) => {
    e.preventDefault();
    apiAuth
      .signIn(body)
      .then((res) => {
        console.log("Logado com sucesso!");
        console.log(res.data);
        login(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function editBody(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  return (
    <SignInDiv>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          name="email"
          value={body.name}
          required
          type="email"
          placeholder="E-mail"
          onChange={editBody}
        />
        <InputStyled
          name="password"
          value={body.password}
          required
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
