import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LinkStyled,
  SignUpDiv,
} from "./signUpPageStyled";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    img_url: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.img_url ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("You must fill all the fields!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    apiAuth
      .singUp(form)
      .then((response) => {
        if (response.status === 201) {
          alert("Register successful");
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          alert("this email is already registered");
        }
      });
  }

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <SignUpDiv>
      <FormStyled onSubmit={submitForm}>
        <InputStyled
          name="name"
          value={form.name}
          required
          type="text"
          placeholder="Username"
          onChange={editForm}
        />
        <InputStyled
          name="email"
          value={form.email}
          required
          type="email"
          placeholder="E-mail"
          onChange={editForm}
        />
        <InputStyled
          name="img_url"
          value={form.img_url}
          required
          type="url"
          placeholder="Picture Url"
          onChange={editForm}
        />
        <InputStyled
          name="password"
          value={form.password}
          required
          type="password"
          placeholder="Password"
          onChange={editForm}
        />
        <InputStyled
          name="confirmPassword"
          value={form.confirmPassword}
          required
          type="password"
          placeholder="Confirm password"
          onChange={editForm}
        />
        <ButtonStyled onClick={submitForm}>Sign Up</ButtonStyled>
      </FormStyled>

      <LinkStyled to="/sign-in">Switch back to log in</LinkStyled>
    </SignUpDiv>
  );
}
