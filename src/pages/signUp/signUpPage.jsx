import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LinkStyled,
  SignUpDiv,
  Title,
} from "./signUpPageStyled";

export default function SignUpPage() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    img_url: "",
    password: "",
    // confirmPassword: "",
  });
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.img_url ||
      !form.password
      // || !form.confirmPassword
    ) {
      alert("You must fill all the fields!");
      return;
    }

    // if (form.password !== form.confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    setDisabled(true);

    apiAuth
      .singUp(form)
      .then((response) => {
        alert("Register successful");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 409) {
          alert("this email is already registered");
        } else {
          alert("An error occurred, please try again later");
        }
        setDisabled(false);
      });
  }

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <SignUpDiv>
      <Title>
        linkr
        <p>
          save, share and discover
          <br />
          the best links on the web
        </p>
      </Title>

      <FormStyled onSubmit={submitForm}>
        <InputStyled
          data-test="username"
          disabled={disabled}
          name="name"
          value={form.name}
          required
          type="text"
          placeholder="Username"
          onChange={editForm}
        />
        <InputStyled
          data-test="email"
          disabled={disabled}
          name="email"
          value={form.email}
          required
          type="email"
          placeholder="E-mail"
          onChange={editForm}
        />
        <InputStyled
          data-test="picture-url"
          disabled={disabled}
          name="img_url"
          value={form.img_url}
          required
          type="url"
          placeholder="Picture Url"
          onChange={editForm}
        />
        <InputStyled
          data-test="password"
          disabled={disabled}
          name="password"
          value={form.password}
          required
          type="password"
          placeholder="Password"
          onChange={editForm}
        />
        {/* <InputStyled
          data-test="confirm-password"
          disabled={disabled}
          name="confirmPassword"
          value={form.confirmPassword}
          required
          type="password"
          placeholder="Confirm password"
          onChange={editForm}
        /> */}
        <ButtonStyled
          data-test="sign-up-btn"
          disabled={disabled}
          onClick={submitForm}
        >
          Sign Up
        </ButtonStyled>
        <LinkStyled data-test="login-link" to="/">
          Switch back to log in
        </LinkStyled>
      </FormStyled>
    </SignUpDiv>
  );
}
