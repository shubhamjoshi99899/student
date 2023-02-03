import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthUserContext";

import { Alert } from "reactstrap";
import { Box, Button, Container, InputLabel, TextField } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in firebase");
          router.push("/dashboard");
        })
        .catch((error) => {
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };

  return (
    <Box mt={10}>
      <Container
        sx={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={{ maxWidth: "400px", margin: "auto" }} onSubmit={onSubmit}>
          {error && <Alert color="danger">{error}</Alert>}
          <InputLabel for="signUpEmail" sm={4}>
            Email
          </InputLabel>
          <TextField
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            id="signUpEmail"
            placeholder="Email"
            sx={{ mb: 3 }}
          />
          <InputLabel for="signUpPassword" sm={4}>
            Password
          </InputLabel>
          <TextField
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            id="signUpPassword"
            placeholder="Password"
            sx={{ mb: 3 }}
          />
          <InputLabel for="signUpPassword2" sm={4}>
            Confirm Password
          </InputLabel>
          <TextField
            type="password"
            name="password"
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value)}
            id="signUpPassword2"
            sx={{ mb: 3 }}
            placeholder="Password"
          />
          <Box>
            <Button variant="contained" type="submit" onClick={onSubmit}>
              Sign Up
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default SignUp;
