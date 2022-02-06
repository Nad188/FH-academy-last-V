import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../../JS/actions/adminActions";
import { Redirect } from "react-router-dom";

import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./signInElements";

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.admin.isAuth);
  const loading = useSelector((state) => state.admin.loading);

  const login = () => {
    const cred = {
      email,
      password,
    };

    dispatch(adminLogin(cred));
    setEmail("");
    setPassword("");
  };

  return loading ? (
    <h1>Please wait</h1>
  ) : isAuth ? (
    <Redirect to="/adminPage" />
  ) : (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">FHacademy</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in </FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                placeholder="Email"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="Password"
                required
                placeholder="Password"
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="button" onClick={() => login()}>
                Continue
              </FormButton>
              <Text>Forget password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default signIn;
