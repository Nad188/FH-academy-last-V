import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentRegister } from "../../../JS/actions/studentActions";
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
} from "./signUpElements";

const signUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.student.loading);

  const dispatch = useDispatch();

  const register = () => {
    const newStudent = {
      firstName,
      lastName,
      phone,
      parentName,
      parentPhone,
      email,
      password,
    };

    dispatch(StudentRegister(newStudent));

    setFirstName("");
    setLastName("");
    setPhone("");
    setParentName("");
    setParentPhone("");
    setEmail("");
    setPassword("");
  };

  return loading ? (
    <h1>Please wait</h1>
  ) : (
    <Container>
      <FormWrap>
        <Icon to="/">FHacademy</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign Up </FormH1>
            <FormLabel htmlFor="for">First name</FormLabel>
            <FormInput
              type="text"
              required
              name=""
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormLabel htmlFor="for">last name</FormLabel>
            <FormInput
              type="text"
              required
              name=""
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel htmlFor="for">Phone</FormLabel>
            <FormInput
              type="text"
              name=""
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormLabel htmlFor="for">Parent name</FormLabel>
            <FormInput
              type="text"
              name=""
              placeholder="Parent name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
            <FormLabel htmlFor="for">Parent phone</FormLabel>
            <FormInput
              type="text"
              name=""
              placeholder="Parent phone"
              value={parentPhone}
              onChange={(e) => setParentPhone(e.target.value)}
            />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="text"
              name=""
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput
              type="Password"
              required
              name=""
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton type="submit"  onClick={() => register()}>Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default signUp;
