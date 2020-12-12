import React, { useState } from "react";
import { TextInput, Form, Button, Box, Heading, FormField } from "grommet";
import { useHistory } from "react-router-dom";
import firebase from "../utils/firebase";

const auth = firebase.auth();
const db = firebase.firestore();

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const history = useHistory();

  const handleSubmit = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setErrors({ password: "", email: error.message });
            break;
          case "auth/weak-password":
            setErrors({ email: "", password: error.message });
            break;
          default:
            alert(error.message);
        }
      });

    db.collection("users")
      .doc(auth.currentUser.uid)
      .set({ uid: auth.currentUser.uid });

    history.push("/feed");
  };
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <Box
        width={{ width: "30vw", min: "200px", max: "30vw" }}
        flex
        align="center"
        gap="small"
        border={{ color: "gray", size: "small" }}
        round="xsmall"
        pad="small"
      >
        <Heading>Qwhiz</Heading>
        <Heading level={4} textAlign="center">
          Sign up to create and take quizzes with your friends.
        </Heading>
        <FormField error={errors.email} style={{ maxWidth: "max-content" }}>
          <TextInput
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField error={errors.password}>
          <TextInput
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>
        <Button
          type="submit"
          label="Sign up"
          disabled={email === "" || password === ""}
        />
      </Box>
    </Form>
  );
}
